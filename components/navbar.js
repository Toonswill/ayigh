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

      <!-- Desktop Navigation -->
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

      <!-- Mobile Menu Button -->
      <button id="menu-btn" class="md:hidden p-2 text-gray-300 hover:text-yigh-400 transition-colors relative z-[70]">
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>

    </div>
  </div>
</nav>

<!-- Mobile Menu (Hidden by default) -->
<div id="mobile-menu" class="fixed inset-0 z-[60] bg-yigh-950/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6 opacity-0 invisible transition-all duration-300">
  <button id="close-menu" class="absolute top-5 right-5 p-2 text-gray-300 hover:text-yigh-400 transition-colors z-[70]">
    <i data-lucide="x" class="w-7 h-7"></i>
  </button>

  <div class="flex flex-col items-center gap-6 w-full px-6 max-h-[80vh] overflow-y-auto">
    <a href="#about" class="mobile-link text-xl sm:text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors py-2">About</a>
    <a href="#focus" class="mobile-link text-xl sm:text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors py-2">Focus Areas</a>
    <a href="#events" class="mobile-link text-xl sm:text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors py-2">Events</a>
    <a href="#partners" class="mobile-link text-xl sm:text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors py-2">Partners</a>
    <a href="https://youth-green-hub.vercel.app/" 
       target="_blank" rel="noopener noreferrer" 
       class="mobile-link text-xl sm:text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors py-2">Policy Hub</a>
    <a href="#join" class="mobile-link text-xl sm:text-2xl font-display font-semibold text-gray-200 hover:text-yigh-400 transition-colors py-2">Contact</a>
    
    <!-- Mobile Join Button -->
    <a href="#join" class="mt-4 px-8 py-3 bg-yigh-500 hover:bg-yigh-400 text-yigh-950 font-semibold text-base rounded-full transition-all transform hover:scale-105">
      Join YIGH
    </a>
  </div>
</div>
`;

// Mobile menu functionality
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMobileMenu() {
  mobileMenu.classList.remove('opacity-0', 'invisible');
  mobileMenu.classList.add('opacity-100', 'visible');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('opacity-100', 'visible');
  mobileMenu.classList.add('opacity-0', 'invisible');
  document.body.style.overflow = '';
}

if (menuBtn) {
  menuBtn.addEventListener('click', openMobileMenu);
}

if (closeMenuBtn) {
  closeMenuBtn.addEventListener('click', closeMobileMenu);
}

// Close menu when clicking on a link
mobileLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    closeMobileMenu();
    
    // Smooth scroll to section
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('visible')) {
    closeMobileMenu();
  }
});

// Initialize Lucide icons
lucide.createIcons();