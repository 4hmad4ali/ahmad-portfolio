
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    initializePremiumFeatures();
    initializeTypingAnimation();
    initializeSkillsAnimation();
    initializeTechnologiesFilter();
    initializeMouseTrail();
    initializeAOS();
});

// ===== MOBILE MENU =====
function initializeMobileMenu() {
    const hamburgerBtn = document.getElementById('menu-btn');
    const mobileNav = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    if (hamburgerBtn && mobileNav) {
        // Toggle mobile menu
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            mobileNav.classList.toggle('hidden');
            
            // Change icon from bars to X
            const icon = this.querySelector('i');
            if (mobileNav.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
            
            // Prevent body scroll when menu is open
            if (!mobileNav.classList.contains('hidden')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking on links
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.add('hidden');
                const icon = hamburgerBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.add('hidden');
                const icon = hamburgerBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
                document.body.style.overflow = '';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hamburgerBtn.classList.remove('active');
                mobileNav.classList.add('hidden');
                const icon = hamburgerBtn.querySelector('i');
                icon.className = 'fas fa-bars text-xl';
                document.body.style.overflow = '';
            }
        });
    }
}
// ===== STYLISH LOADING SCREEN =====

// ===== PREMIUM FEATURES =====
function initializePremiumFeatures() {
    setupThemeToggle();
    setupScrollProgress();
    setupFloatingNav();
    setupNavigation();
    createParticles();
    setupHeaderScroll();
}

function setupHeaderScroll() {
    const header = document.querySelector('.glass-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

function createParticles() {
    const particlesContainer = document.getElementById('particles-container');
    if (!particlesContainer) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = Math.random() * 3 + 3 + 's';
        particlesContainer.appendChild(particle);
    }
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (icon.classList.contains('fa-moon')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 400);
    });
}

function setupScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

function setupFloatingNav() {
    const floatingNav = document.getElementById('floating-nav');
    if (!floatingNav) return;

    const navItems = floatingNav.querySelectorAll('.nav-item');
    navItems.forEach((item) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            scrollToSection(section);
            navItems.forEach((nav) => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    window.addEventListener('scroll', updateFloatingNav);
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach((l) => l.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    window.addEventListener('scroll', updateActiveNav);
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function updateFloatingNav() {
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-item');
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach((item) => {
        item.classList.remove('active');
        if (item.getAttribute('data-section') === current) {
            item.classList.add('active');
        }
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// ===== TYPING ANIMATION =====
function initializeTypingAnimation() {
    const typedRole = document.getElementById("typed-role");
    if (!typedRole) return;

    const roles = [
       "full-stuck Web Developer",
       "CEO and Founder Of ABA Group",
       
        
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        const current = roles[roleIndex];
        if (!deleting) {
            typedRole.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === current.length) {
                deleting = true;
                setTimeout(type, 1500);
                return;
            }
        } else {
            if (charIndex > 0) {
                typedRole.textContent = current.substring(0, charIndex - 1);
            }
            charIndex--;
            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }
        setTimeout(type, deleting ? 60 : 120);
    }

    type();
}

// ===== SKILLS ANIMATION =====
function initializeSkillsAnimation() {
    const skillSection = document.getElementById('skills');
    const skillLines = document.querySelectorAll('.skill-line');
    let animated = false;

    function animateSkills() {
        if (animated) return;

        const sectionTop = skillSection.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            skillLines.forEach((line, index) => {
                setTimeout(() => {
                    const bar = line.querySelector('.skill-bar');
                    const width = line.getAttribute('data-width');
                    const color = line.getAttribute('data-color');

                    bar.className = `skill-bar h-3 w-0 rounded-full bg-gradient-to-r ${color}`;
                    bar.style.transition = 'width 2s ease-in-out';
                    bar.style.width = width;
                }, index * 500);
            });
            animated = true;
        }
    }

    window.addEventListener('scroll', animateSkills);
    animateSkills();
}

// ===== TECHNOLOGIES FILTER (CLEAN + PREMIUM) =====
function initializeTechnologiesFilter() {
  let currentFilter = "all";
  let currentSearch = "";

  const techItems = Array.from(document.querySelectorAll(".tech-item"));
  const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
  const mobileFilter = document.getElementById("mobile-filter");
  const searchInput = document.getElementById("tech-search");

  // Helper: set active button by category
  function setActiveButton(category) {
    filterBtns.forEach((btn) => btn.classList.remove("active"));

    // Match by onclick content or data-category attr (recommended)
    const activeBtn =
      filterBtns.find((btn) => (btn.getAttribute("onclick") || "").includes(`'${category}'`)) ||
      filterBtns.find((btn) => btn.dataset.category === category);

    if (activeBtn) activeBtn.classList.add("active");
  }

  // Helper: animate show/hide
  function showItem(el) {
    el.classList.remove("hidden");
    el.style.display = ""; // reset if previously forced
    el.animate(
      [
        { opacity: 0, transform: "translateY(10px) scale(0.98)" },
        { opacity: 1, transform: "translateY(0px) scale(1)" }
      ],
      { duration: 220, easing: "ease-out" }
    );
  }

  function hideItem(el) {
    el.classList.add("hidden");
  }

  function applyFilters() {
    techItems.forEach((item) => {
      const techName = (item.querySelector("h4")?.textContent || "").toLowerCase();
      const category = item.dataset.category || "";

      const matchesFilter = currentFilter === "all" || category === currentFilter;
      const matchesSearch = currentSearch === "" || techName.includes(currentSearch);

      if (matchesFilter && matchesSearch) {
        // Only animate if it was hidden
        if (item.classList.contains("hidden") || item.style.display === "none") {
          item.style.display = "block";
          showItem(item);
        } else {
          item.style.display = "block";
        }
      } else {
        item.style.display = "none";
        hideItem(item);
      }
    });
  }

  // Expose global for your onclick="filterTechnologies('frontend')"
  window.filterTechnologies = function (category) {
    currentFilter = category;

    // Sync mobile dropdown
    if (mobileFilter) mobileFilter.value = category;

    // Toggle active state
    setActiveButton(category);

    applyFilters();
  };

  // Expose global search (optional, if you wire it)
  window.searchTechnologies = function () {
    if (!searchInput) return;
    currentSearch = searchInput.value.trim().toLowerCase();
    applyFilters();
  };

  // Search listener
  if (searchInput) {
    searchInput.addEventListener("input", window.searchTechnologies);
  }

  // Mobile dropdown listener (if not already handled by onchange)
  if (mobileFilter) {
    mobileFilter.addEventListener("change", (e) => window.filterTechnologies(e.target.value));
  }

  // Initial
  setActiveButton(currentFilter);
  applyFilters();
}




// ===== AOS INITIALIZATION =====
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        });
    }
}
/* email section */
const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "Sending...";

    const formData = new FormData(form);

    // Basic spam check (honeypot)
    if (formData.get("website")) {
      statusEl.textContent = "Submission blocked.";
      return;
    }

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        statusEl.textContent = "Message sent ✅";
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        statusEl.textContent = data?.errors?.[0]?.message || "Failed to send ❌";
      }
    } catch (err) {
      statusEl.textContent = "Network error ❌";
    }
  });

  /* skill section  */
  document.addEventListener('DOMContentLoaded', function() {
  const skillSection = document.getElementById('skills');
  const skillLines = document.querySelectorAll('.skill-line');
  let animated = false;

  function animateSkills() {
    if (animated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      skillLines.forEach((line, index) => {
        setTimeout(() => {
          const bar = line.querySelector('.skill-bar');
          const width = line.getAttribute('data-width');
          const color = line.getAttribute('data-color');

          bar.className = `skill-bar h-3 w-0 rounded-full bg-gradient-to-r ${color}`;
          bar.style.transition = 'width 2s ease-in-out';
          bar.style.width = width;
        }, index * 500); // step by step animation
      });
      animated = true;
    }
  }

  window.addEventListener('scroll', animateSkills);
  animateSkills();
});