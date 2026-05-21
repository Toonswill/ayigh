document.getElementById("navbar-container").innerHTML = `
<nav class="nav-glass">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 sm:h-20">
      <a href="#hero" class="flex items-center gap-2 group">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center font-display font-bold text-white text-sm sm:text-base group-hover:scale-110 transition-transform">
          Y
        </div>
        <span class="font-display font-bold text-lg sm:text-xl tracking-tight text-gray-900">
          AYIGH
        </span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#about" class="text-sm text-gray-700 hover:text-green-600 transition-colors">About</a>
        <a href="#focus" class="text-sm text-gray-700 hover:text-green-600 transition-colors">Focus Areas</a>
        <a href="#events" class="text-sm text-gray-700 hover:text-green-600 transition-colors">Events</a>
        <a href="#team" class="text-sm text-gray-700 hover:text-green-600 transition-colors">Team</a>
        <a href="#join" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-700 hover:text-green-600 transition-colors">Policy Hub</a>
        <a href="#join" class="text-sm text-gray-700 hover:text-green-600 transition-colors">Contact</a>
        <a href="#join" class="px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm rounded-full transition-all">
          Join AYIGH
        </a>
      </div>

      <button id="menu-btn" class="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors">
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>
    </div>
  </div>
</nav>

<div id="mobile-menu">
  <button id="close-menu">
    <i data-lucide="x" class="w-6 h-6 text-gray-700"></i>
  </button>
  <a href="#about" class="mobile-link">About</a>
  <a href="#focus" class="mobile-link">Focus Areas</a>
  <a href="#events" class="mobile-link">Events</a>
  <a href="#team" class="mobile-link">Team</a>
  <a href="#join" target="_blank" class="mobile-link">Policy Hub</a>
  <a href="#join" class="mobile-link">Contact</a>
  <a href="#join" class="mt-4 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-center rounded-full transition-all">Join YIGH</a>
</div>
`;

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  document.body.classList.add('menu-open');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
}

if (menuBtn) menuBtn.addEventListener('click', openMobileMenu);
if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    closeMobileMenu();
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#' && !targetId.includes('http')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMobileMenu();
});

lucide.createIcons();