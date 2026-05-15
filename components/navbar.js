document.getElementById("navbar-container").innerHTML = `
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 nav-glass">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 sm:h-20">

      <a href="#hero" class="flex items-center gap-2 group">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-yigh-400 to-hydrogen-500 flex items-center justify-center font-display font-bold text-yigh-950 text-sm sm:text-base group-hover:scale-110 transition-transform">
          Y
        </div>
        <span class="font-display font-bold text-lg sm:text-xl tracking-tight">
          YIGH
        </span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#about" class="text-sm text-gray-300 hover:text-yigh-400 transition-colors">About</a>
        <a href="#focus" class="text-sm text-gray-300 hover:text-yigh-400 transition-colors">Focus Areas</a>
        <a href="#events" class="text-sm text-gray-300 hover:text-yigh-400 transition-colors">Events</a>
        <a href="#partners" class="text-sm text-gray-300 hover:text-yigh-400 transition-colors">Partners</a>
        <a href="https://youth-green-hub.vercel.app/" 
        target="_blank" rel="noopener noreferrer" class="text-sm text-gray-300 hover:text-yigh-400 transition-colors">Policy Hub
        </a>
        <a href="#join" class="text-sm text-gray-300 hover:text-yigh-400 transition-colors">Contact</a>
        <a href="#join" class="px-5 py-2.5 bg-yigh-500 hover:bg-yigh-400 text-yigh-950 font-semibold text-sm rounded-full transition-all">
          Join YIGH
        </a>
      </div>

      <button id="menu-btn" class="md:hidden p-2 text-gray-300 hover:text-yigh-400 transition-colors">
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>

    </div>
  </div>
</nav>

<div id="mobile-menu" class="mobile-menu fixed inset-0 z-[60] bg-yigh-950/98 flex flex-col items-center justify-center gap-8">
  <button id="close-menu" class="absolute top-5 right-5 p-2 text-gray-300 hover:text-yigh-400 transition-colors">
    <i data-lucide="x" class="w-7 h-7"></i>
  </button>

  <a href="#about" class="mobile-link text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors">About</a>
  <a href="#focus" class="mobile-link text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors">Focus Areas</a>
  <a href="#opportunities" class="mobile-link text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors">Opportunities</a>
  <a href="#vision" class="mobile-link text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors">Vision</a>
</div>
`;

lucide.createIcons();