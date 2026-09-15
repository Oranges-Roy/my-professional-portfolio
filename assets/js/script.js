'use strict';

// Element toggle function
const elementToggleFunc = function (elem) { 
  if (elem) elem.classList.toggle("active"); 
}

// Sidebar toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () { 
    elementToggleFunc(sidebar); 
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event listener to all navigation links
if (navigationLinks.length && pages.length) {
  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const selectedPage = this.innerText.toLowerCase().trim();

      pages.forEach((page) => {
        if (selectedPage === page.dataset.page) {
          page.classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
        }
      });

      navigationLinks.forEach((navLink) => {
        if (navLink.innerText.toLowerCase().trim() === selectedPage) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
    });
  });
}
