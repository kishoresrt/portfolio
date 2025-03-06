// DOM Elements
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-progress');
const courseTabs = document.querySelectorAll('.course-tab');
const coursePanels = document.querySelectorAll('.course-panel');
const assignmentCards = document.querySelectorAll('.assignment-card');
const projectCards = document.querySelectorAll('.project-card');
const assignmentModal = document.getElementById('assignment-modal');
const projectModal = document.getElementById('project-modal');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const contactForm = document.getElementById('contact-form');
const currentYearSpan = document.getElementById('current-year');

// Set current year in footer
currentYearSpan.textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  mobileNav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

function setActiveNavLink() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === #${current}) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNavLink);
window.addEventListener('load', setActiveNavLink);

// Animate skill bars on scroll
function animateSkillBars() {
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = ${width}%;
  });
}

// Use Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('skill-progress')) {
        animateSkillBars();
      } else if (entry.target.classList.contains('fade-in')) {
        entry.target.classList.add('visible');
      }
    }
  });
}, { threshold: 0.1 });

// Observe skill bars
skillBars.forEach(bar => {
  observer.observe(bar);
});

// Course tabs functionality
courseTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('data-id');
    
    // Remove active class from all tabs and panels
    courseTabs.forEach(t => t.classList.remove('active'));
    coursePanels.forEach(p => p.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding panel
    tab.classList.add('active');
    document.querySelector(.course-panel[data-id="${tabId}"]).classList.add('active');
  });
});

// Assignment modal functionality
assignmentCards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
    const image = card.querySelector('img').src;
    const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);
    
    // Create modal content
    const modalContent = `
      <h2>${title}</h2>
      <img src="${image}" alt="${title}" class="modal-image">
      <p>${description}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, 
      nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt,
      nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.</p>
      <div class="modal-tags">
        ${tags.map(tag => <span class="tag">${tag}</span>).join('')}
      </div>
      <div class="modal-actions">
        <a href="#" class="btn btn-primary">
          <span>View Full Project</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    
    // Set modal content and show modal
    assignmentModal.querySelector('.modal-body').innerHTML = modalContent;
    assignmentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Project modal functionality
projectCards.forEach(card => {
  const detailsBtn = card.querySelector('.project-details-btn');
  
  detailsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const id = card.getAttribute('data-id');
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
    const image = card.querySelector('img').src;
    const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent);
    
    // Create features list based on project ID
    let features;
    if (id === '1') {
      features = [
        'User authentication and profiles',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Payment processing with Stripe',
        'Order history and tracking',
        'Admin dashboard for product management'
      ];
    } else {
      features = [
        'Real-time task updates with Socket.io',
        'Team collaboration features',
        'Task assignment and due dates',
        'Project organization and tagging',
        'Notifications and reminders',
        'Time tracking and reporting'
      ];
    }
    
    // Create modal content
    const modalContent = `
      <h2>${title}</h2>
      <img src="${image}" alt="${title}" class="modal-image">
      <p>${description}</p>
      
      <h3>Key Features</h3>
      <ul class="feature-list">
        ${features.map(feature => <li>${feature}</li>).join('')}
      </ul>
      
      <div class="modal-actions">
        <a href="#" class="btn btn-outline">
          <i class="fab fa-github"></i>
          <span>View Source</span>
        </a>
        <a href="#" class="btn btn-primary">
          <i class="fas fa-external-link-alt"></i>
          <span>Live Demo</span>
        </a>
      </div>
    `;
    
    // Set modal content and show modal
    projectModal.querySelector('.modal-body').innerHTML = modalContent;
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

// Close modals
modalCloseButtons.forEach(button => {
  button.addEventListener('click', () => {
    assignmentModal.classList.remove('active');
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === assignmentModal) {
    assignmentModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  if (e.target === projectModal) {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formMessage = contactForm.querySelector('.form-message');
  const submitBtn = contactForm.querySelector('.submit-btn');
  
  // Disable button and show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  
  // Simulate form submission
  setTimeout(() => {
    // Reset form
    contactForm.reset();
    
    // Show success message
    formMessage.textContent = 'Your message has been sent successfully!';
    formMessage.classList.add('success');
    formMessage.style.display = 'block';
    
    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="far fa-paper-plane"></i> Send Message';
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = 'none';
      formMessage.classList.remove('success');
    }, 5000);
  }, 1500);
});

// Add fade-in animation to elements
document.querySelectorAll('.about-card, .assignment-card, .project-card, .timeline-content, .other-skills-tags .tag')
  .forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .modal-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1.5rem 0;
  }
  
  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .feature-list {
    list-style: disc;
    padding-left: 1.5rem;
    margin: 1rem 0 1.5rem;
    color: var(--light-gray);
  }
  
  .feature-list li {
    margin-bottom: 0.5rem;
  }
`;
document.head.appendChild(style);