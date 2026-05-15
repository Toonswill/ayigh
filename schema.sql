-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Enums
create type user_role as enum ('guest', 'member', 'admin');
create type brief_status as enum ('pending', 'approved', 'rejected');
create type policy_status as enum ('draft', 'published');

-- Categories
create table categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  slug text not null unique,
  description text,
  icon text,
  created_at timestamptz default now()
);

-- Policies
create table policies (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  country text not null,
  publication_date date,
  category_id uuid references categories(id) on delete set null,
  summary text not null,
  key_highlights jsonb default '[]'::jsonb,
  youth_implications text,
  opportunities jsonb default '[]'::jsonb,
  challenges jsonb default '[]'::jsonb,
  download_url text,
  pdf_path text,
  status policy_status default 'published',
  created_by uuid references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Policy Briefs (youth submissions)
create table policy_briefs (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  author_id uuid references auth.users(id) not null,
  author_name text,
  file_url text,
  tags jsonb default '[]'::jsonb,
  status brief_status default 'pending',
  review_notes text,
  reviewed_by uuid references auth.users(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- FAQs
create table faqs (
  id uuid primary key default uuid_generate_v4(),
  question text not null,
  answer text not null,
  category_id uuid references categories(id) on delete set null,
  policy_id uuid references policies(id) on delete cascade,
  order_index int default 0,
  created_at timestamptz default now()
);

-- Profiles (extends auth.users)
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role user_role default 'member',
  country text,
  avatar_url text,
  bio text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Related policies (self-referencing M:N)
create table related_policies (
  policy_id uuid references policies(id) on delete cascade,
  related_policy_id uuid references policies(id) on delete cascade,
  primary key (policy_id, related_policy_id)
);

-- Indexes
create index idx_policies_category on policies(category_id);
create index idx_policies_country on policies(country);
create index idx_policies_status on policies(status);
create index idx_briefs_status on policy_briefs(status);
create index idx_briefs_author on policy_briefs(author_id);
create index idx_faqs_category on faqs(category_id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)), 'member');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Row Level Security
alter table profiles enable row level security;
alter table policies enable row level security;
alter table policy_briefs enable row level security;
alter table faqs enable row level security;
alter table related_policies enable row level security;

-- Profiles: view all, update own (admin can update all via service role or separate policy)
create policy "Profiles are viewable by everyone"
  on profiles for select using (true);

create policy "Users can update own profile"
  on profiles for update using (auth.uid() = id);

-- Policies: public read published, admin full access
create policy "Published policies are viewable by everyone"
  on policies for select using (status = 'published');

create policy "Admin full access on policies"
  on policies for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Briefs: authors view own; admins view all; members insert; admins update status
create policy "Users can view own briefs"
  on policy_briefs for select using (author_id = auth.uid());

create policy "Admins can view all briefs"
  on policy_briefs for select using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Members can insert briefs"
  on policy_briefs for insert with check (
    exists (select 1 from profiles where id = auth.uid() and role in ('member', 'admin'))
  );

create policy "Admins can update briefs"
  on policy_briefs for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- FAQs: public read, admin write
create policy "FAQs are viewable by everyone"
  on faqs for select using (true);

create policy "Admins can manage FAQs"
  on faqs for all using (
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

-- Storage buckets
insert into storage.buckets (id, name, public) values ('policy-documents', 'policy-documents', true);
insert into storage.buckets (id, name, public) values ('brief-documents', 'brief-documents', true);

-- Storage RLS
create policy "Public read policy docs"
  on storage.objects for select using (bucket_id = 'policy-documents');

create policy "Admin insert policy docs"
  on storage.objects for insert with check (
    bucket_id = 'policy-documents' and
    exists (select 1 from profiles where id = auth.uid() and role = 'admin')
  );

create policy "Member insert brief docs"
  on storage.objects for insert with check (
    bucket_id = 'brief-documents' and
    exists (select 1 from profiles where id = auth.uid() and role in ('member', 'admin'))
  );