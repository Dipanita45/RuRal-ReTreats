document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".mobile-menu ul li a");
  const navbar = document.querySelector(".navbar");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.querySelector(".search-bar button");
  const mobileSearchInput = document.getElementById("mobile-search-input");
  const mobileSearchBtn = document.querySelector(".mobile-search-bar button");

  // Menu toggle
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.add("active");
    });
  }

  if (menuClose) {
    menuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  }

  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }

  // Sticky navbar
  window.addEventListener("scroll", function () {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("scrolled");
      }
    }
  });

  // Search functionality
  function handleSearch(query) {
    query = query.trim().toLowerCase();
    const pages = {
      home: "index.html",
      services: "services.html",
      homestays: "homestays.html",
      faq: "faq.html",
      contact: "contact.html",
      "privacy policy": "pp.html",
      "terms and condition": "t&c.html",
      service: "services.html",
      homestay: "homestays.html",
      faqs: "faq.html",
      blogs: "blog.html",
      blog: "blog.html",
      adventure: "Adventure.html",
      adventures: "Adventure.html",
      budget: "Budget.html",
      about: "about.html",
      pp: "pp.html",
      "t&c": "t&c.html",
    };

    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      alert("No results found for: " + query);
    }
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", function () {
      if (searchInput && searchInput.value.trim() !== "") {
        handleSearch(searchInput.value);
      }
    });
  }

  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener("click", function () {
      if (mobileSearchInput && mobileSearchInput.value.trim() !== "") {
        handleSearch(mobileSearchInput.value);
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSearch(searchInput.value);
      }
    });
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSearch(mobileSearchInput.value);
      }
    });
  }

  // Back to top button
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Chatbot
  const chatButton = document.getElementById("chatButton");
  const chatModal = document.getElementById("chatModal");
  const closeChatbot = document.querySelector(".close-chatbot");

  if (chatButton && chatModal) {
    chatButton.addEventListener("click", () => {
      chatModal.classList.add("active");
    });
  }

  if (closeChatbot && chatModal) {
    closeChatbot.addEventListener("click", () => {
      chatModal.classList.remove("active");
    });
  }
});
