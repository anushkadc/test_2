
////////for all headings
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

///////////////////for dropdown animation
 function toggleDropdown(label) {
  const dropdown = label.nextElementSibling;
  const arrow = label.querySelector('.arrow');

  dropdown.classList.toggle('show');
  arrow.classList.toggle('rotate');
}
function toggleDropdown(label) {
  const dropdown = label.parentElement;
  dropdown.classList.toggle('open');
}

// Close dropdowns if clicked outside
document.addEventListener('click', function (e) {
  const isDropdown = e.target.closest('.dropdown');
  document.querySelectorAll('.dropdown').forEach(drop => {
    if (drop !== isDropdown) {
      drop.classList.remove('open');
    }
  });
});


// Toggle mobile menu
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}

// Close menu on link click
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a, .dropdown-content a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const navbar = document.getElementById("navbar");
      navbar.classList.remove("show");
    });
  });
});


 ///for mobile navbar
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}
// Close navbar on link click
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a, .dropdown-content a");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const navbar = document.getElementById("navbar");
        if (navbar.classList.contains("show")) {
          navbar.classList.remove("show");
        }
      });
    });
  });

  ////for navbar animation
    document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a, .dropdown-content a");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const navbar = document.getElementById("navbar");
        if (navbar.classList.contains("show")) {
          setTimeout(() => {
            navbar.classList.remove("show");
          }, 100); // slight delay to allow link tap to register
        }
      });
    });
  });



    ///////global reach
    function revealOnScroll() {
    const steps = document.querySelectorAll('.del-box');
    const windowHeight = window.innerHeight;

    steps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {  // Adjust trigger point if needed
        step.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);





  //////////-auto scrolling 
  document.addEventListener("DOMContentLoaded", () => {
     const container = document.querySelector('.value-cards-container');
const content = document.querySelector('.scroller');

let scrollPosition = 0;

function autoScroll() {
  scrollPosition += 1; // Adjust the speed as needed
  if (scrollPosition > content.scrollWidth - container.offsetWidth) {
    scrollPosition = 0; // Loop back to the beginning
  }
  container.scrollLeft = scrollPosition;
  requestAnimationFrame(autoScroll); // Use requestAnimationFrame for smooth scrolling
}

requestAnimationFrame(autoScroll); // Start the scroll
  
});

 


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.product_card_single');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

});


///////////color strio//////////

  const strip = document.querySelector(".color-strip");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / scrollHeight;
    strip.style.transform = `scaleX(${progress})`;
  });

//////////highlighting navlinks/////////
  const navLinks = document.querySelectorAll('.navbar > a'); // top-level nav links
const dropdowns = document.querySelectorAll('.dropdown');

const currentPath = window.location.pathname;

navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;

  if (currentPath.endsWith(linkPath)) {
    link.classList.add('active');
  }
});

// Check dropdowns
dropdowns.forEach(dropdown => {
  const dropdownLinks = dropdown.querySelectorAll('a');
  dropdownLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    
    // If dropdown link's path matches current path, activate parent label
    if (currentPath.endsWith(linkPath)) {
      const label = dropdown.querySelector('.dropdown-label');
      if (label) {
        label.classList.add('active');
      }
    }
  });
});


window.addEventListener('load', function () {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // delay to allow layout to stabilize
      }
    }
  });


















