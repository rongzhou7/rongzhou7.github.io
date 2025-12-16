// Smooth scroll to anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links with hash
  const navLinks = document.querySelectorAll('a[href^="/#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Get the target section id from href
      const targetId = this.getAttribute('href').substring(2); // Remove '/#'
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smooth scroll to the target
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, '#' + targetId);
        }

        // Update active state
        updateActiveNav(this);
      }
    });
  });

  // Update active navigation on scroll
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.page-section');
    const scrollPos = window.scrollY + 100; // Offset for header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        const correspondingLink = document.querySelector(`a[href="/#${sectionId}"]`);
        if (correspondingLink) {
          updateActiveNav(correspondingLink);
        }
      }
    });
  });

  function updateActiveNav(activeLink) {
    // Remove active class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to the current link
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
});
