// Scroll reveal effect
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".section, .service-card, .hero-content");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  };

  revealOnScroll(); // Initial check
  window.addEventListener("scroll", revealOnScroll);
});

// Smooth scroll for nav links (optional if using scroll-behavior: smooth in CSS)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const body = document.body;
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);
  
  // Toggle menu function
  const toggleMenu = (show) => {
    const isOpen = navLinks.classList.contains('show');
    const shouldOpen = show !== undefined ? show : !isOpen;
    
    if (shouldOpen) {
      navLinks.classList.add('show');
      overlay.classList.add('show');
      body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
      navLinks.classList.remove('show');
      overlay.classList.remove('show');
      body.style.overflow = ''; // Re-enable scrolling
    }
  };
  
  // Toggle menu on button click
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
      toggleMenu(false);
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        toggleMenu(false);
        
        // Smooth scroll to section
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300); // Wait for menu to close
          }
        }
      });
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        toggleMenu(false);
      }
    });
  }
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
    
    // Close menu if window is resized to desktop view
    if (window.innerWidth > 768) {
      toggleMenu(false);
    }
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submission
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Thank you for contacting UniAiAds! We\'ll get back to you shortly.');
    contactForm.reset();
  });
}

// Initial check and add scroll event listener
window.addEventListener('load', () => {
  console.log('🚀 UniAiAds Website Loaded!');
});
