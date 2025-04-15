document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("ZhgpiL0kX2Dy-IrNa");

  // Initialize blog posts
  if (document.getElementById("blog-container")) {
    generateBlogPosts();
    setupBlogFilters();
    setupBlogSearch();
  }
});

function subscribeNewsletter() {
  let email = document.getElementById("newsletter-email").value.trim();
  if (email === "") {
    alert("⚠️ Please enter a valid email!");
    return;
  }
  if (!validateEmail(email)) {
    alert("❌ Invalid Email! Please enter a valid email.");
    return;
  }
  sendNewsletterEmail(email);
  showConfirmationMessage(email);
  document.getElementById("newsletter-email").value = "";
}

function subscribeNewsletterFooter() {
  let email = document.getElementById("footer-newsletter-email").value.trim();
  if (email === "") {
    alert("⚠️ Please enter a valid email!");
    return;
  }
  if (!validateEmail(email)) {
    alert("❌ Invalid Email! Please enter a valid email.");
    return;
  }
  sendNewsletterEmail(email);
  showConfirmationMessage(email);
  document.getElementById("footer-newsletter-email").value = "";
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function sendNewsletterEmail(email) {
  let templateParams = {
    user_email: email,
    to_email: email,
    subject: "🌟 Welcome to Our Travel Newsletter!",
    message: `Hi there! 🎉\n\nThank you for subscribing to our exclusive travel newsletter! ✈️🌎\n\nYou'll receive the latest travel deals, destination tips, and exciting offers. 🏖️\n\nClick the link below to complete your registration:\n\n🔗 [Complete Registration](#)\n\nHappy Travels! 🚀`,
  };
  emailjs
    .send("service_n3pxpvu", "template_b6o5dqb", templateParams)
    .then((response) => {
      console.log("✅ Email sent successfully!", response);
    })
    .catch((error) => {
      console.error("❌ Email sending failed:", error);
    });
}

function showConfirmationMessage(email) {
  let confirmationBox = document.createElement("div");
  confirmationBox.classList.add("newsletter-confirmation");
  confirmationBox.innerHTML = `
        <div class="newsletter-popup">
            <h2>🎉 Subscription Confirmed!</h2>
            <p>Dear <b>${email}</b>, thank you for subscribing!<br>
            You'll receive an email with a registration form.</p>
            <p>📧 Check your inbox and complete your signup.</p>
            <button onclick="closeConfirmation()">OK</button>
        </div>
    `;
  document.body.appendChild(confirmationBox);
}

function closeConfirmation() {
  let confirmationBox = document.querySelector(".newsletter-confirmation");
  if (confirmationBox) {
    confirmationBox.remove();
  }
}

// Blog functionality
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Homestays in Coorg Every Nature Lover Should Experience",
    excerpt:
      "Discover the most enchanting homestays nestled in the coffee plantations of Coorg, offering authentic experiences and stunning views.",
    image:
      "https://images.pexels.com/photos/2775320/pexels-photo-2775320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "homestay",
    date: "May 15, 2023",
    author: "Priya Mehta",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "A Culinary Journey Through Kerala's Coastal Villages",
    excerpt:
      "Explore the rich flavors and traditional cooking techniques in Kerala's quaint fishing villages, from spicy fish curry to sweet coconut desserts.",
    image:
      "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "food",
    date: "June 22, 2023",
    author: "Rahul Sharma",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Sustainable Travel: How Rural Tourism is Changing Indian Villages",
    excerpt:
      "Learn how sustainable tourism initiatives are preserving cultural heritage while providing economic opportunities for rural communities.",
    image:
      "https://images.pexels.com/photos/4429241/pexels-photo-4429241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "travel",
    date: "July 8, 2023",
    author: "Neha Gupta",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "The Hidden Treasures of Meghalaya: Beyond Root Bridges",
    excerpt:
      "Venture beyond the famous living root bridges to discover Meghalaya's lesser-known waterfalls, caves, and traditional Khasi villages.",
    image:
      "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "travel",
    date: "August 3, 2023",
    author: "Amit Patel",
    readTime: "15 min read",
  },
  {
    id: 5,
    title: "Sacred Rituals: Experiencing Spiritual India in Village Temples",
    excerpt:
      "Immerse yourself in the rich spiritual traditions and ancient rituals that continue to thrive in rural India's lesser-known temples.",
    image:
      "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "culture",
    date: "September 12, 2023",
    author: "Sonia Singh",
    readTime: "11 min read",
  },
  {
    id: 6,
    title: "The Art of Choosing the Perfect Rural Homestay",
    excerpt:
      "A comprehensive guide to selecting the ideal homestay that matches your preferences, from amenities and location to hosts and activities.",
    image:
      "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "homestay",
    date: "October 5, 2023",
    author: "Kiran Rao",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "Forgotten Flavors: Traditional Recipes That Are Disappearing",
    excerpt:
      "Discover age-old cooking techniques and rare ingredients that are becoming increasingly difficult to find in modern Indian cuisine.",
    image:
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "food",
    date: "November 18, 2023",
    author: "Anjali Desai",
    readTime: "14 min read",
  },
  {
    id: 8,
    title: "Monsoon Magic: Best Rural Retreats During the Rainy Season",
    excerpt:
      "From the Western Ghats to the Northeast, here are the most beautiful rural destinations that come alive during the monsoon months.",
    image:
      "https://images.pexels.com/photos/2272939/pexels-photo-2272939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "travel",
    date: "December 7, 2023",
    author: "Vikram Singh",
    readTime: "8 min read",
  },
  {
    id: 9,
    title: "Local Artisans: The Heartbeat of India's Village Economies",
    excerpt:
      "Meet the skilled craftspeople preserving traditional arts and crafts in rural India, and how tourism is helping sustain their livelihoods.",
    image:
      "https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "culture",
    date: "January 23, 2024",
    author: "Ritu Kumar",
    readTime: "13 min read",
  },
  {
    id: 10,
    title: "Family-Friendly Rural Getaways: Creating Memories with Kids",
    excerpt:
      "Discover perfect rural destinations and homestays that offer engaging activities and authentic experiences for travelers with children.",
    image:
      "https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "homestay",
    date: "February 15, 2024",
    author: "Pradeep Mehta",
    readTime: "10 min read",
  },
  {
    id: 11,
    title: "The Rise of Farm-to-Table Tourism in Rural India",
    excerpt:
      "Experience the growing trend of agricultural tourism where visitors participate in farming activities and enjoy fresh, organic meals.",
    image:
      "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "food",
    date: "March 5, 2024",
    author: "Sunita Roy",
    readTime: "9 min read",
  },
  {
    id: 12,
    title: "Budget-Friendly Ways to Experience Authentic Rural India",
    excerpt:
      "A practical guide for travelers looking to experience village life without breaking the bank, with tips on accommodations, transportation, and activities.",
    image:
      "https://images.pexels.com/photos/3568489/pexels-photo-3568489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "travel",
    date: "April 19, 2024",
    author: "Alok Sharma",
    readTime: "11 min read",
  },
];

let currentPosts = 6; // Number of posts to show initially
const postsPerLoad = 3; // Number of posts to load each time
let filteredPosts = [...blogPosts]; // All posts initially

function generateBlogPosts() {
  const blogContainer = document.getElementById("blog-container");
  if (!blogContainer) return;

  blogContainer.innerHTML = ""; // Clear existing posts

  // Display only the current number of posts
  const postsToShow = filteredPosts.slice(0, currentPosts);

  postsToShow.forEach((post) => {
    const postElement = document.createElement("article");
    postElement.className = "blog-card";
    postElement.dataset.category = post.category;

    postElement.innerHTML = `
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <span class="category">${post.category}</span>
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="date"><i class="fas fa-calendar-alt"></i> ${post.date}</span>
                    <span class="author"><i class="fas fa-user"></i> ${post.author}</span>
                    <span class="read-time"><i class="fas fa-clock"></i> ${post.readTime}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;

    blogContainer.appendChild(postElement);
  });

  // Hide "Load More" button if all posts are shown
  const loadMoreButton = document.getElementById("load-more");
  if (loadMoreButton) {
    loadMoreButton.style.display =
      currentPosts >= filteredPosts.length ? "none" : "block";
  }
}

function setupBlogFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (!filterButtons.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Filter posts
      const filter = this.dataset.filter;
      currentPosts = 6; // Reset to initial post count

      if (filter === "all") {
        filteredPosts = [...blogPosts];
      } else {
        filteredPosts = blogPosts.filter((post) => post.category === filter);
      }

      generateBlogPosts();
    });
  });

  // Load more posts button
  const loadMoreButton = document.getElementById("load-more");
  if (loadMoreButton) {
    loadMoreButton.addEventListener("click", function () {
      currentPosts += postsPerLoad;
      generateBlogPosts();
    });
  }
}

function setupBlogSearch() {
  const searchInput = document.getElementById("blog-search");
  const searchButton = document.getElementById("search-btn");

  if (!searchInput || !searchButton) return;

  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === "") {
      // Reset to filtered posts based on current category filter
      const activeFilter =
        document.querySelector(".filter-btn.active").dataset.filter;
      if (activeFilter === "all") {
        filteredPosts = [...blogPosts];
      } else {
        filteredPosts = blogPosts.filter(
          (post) => post.category === activeFilter
        );
      }
    } else {
      // Filter posts by search term within current category filter
      const activeFilter =
        document.querySelector(".filter-btn.active").dataset.filter;

      if (activeFilter === "all") {
        filteredPosts = blogPosts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.author.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm)
        );
      } else {
        filteredPosts = blogPosts.filter(
          (post) =>
            post.category === activeFilter &&
            (post.title.toLowerCase().includes(searchTerm) ||
              post.excerpt.toLowerCase().includes(searchTerm) ||
              post.author.toLowerCase().includes(searchTerm))
        );
      }
    }

    currentPosts = 6; // Reset to initial post count
    generateBlogPosts();
  }

  searchButton.addEventListener("click", performSearch);

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch();
    }
  });
}

function loadGoogleTranslate() {
  if (!window.google || !window.google.translate) {
    let script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
    document.body.appendChild(script);
  } else {
    googleTranslateInit();
  }
}

function googleTranslateInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      autoDisplay: false,
    },
    "google_translate_element"
  );
  setTimeout(fixGoogleTranslateStyles, 1000);
}

function changeLanguage(lang) {
  let googleTranslateDropdown = document.querySelector(".goog-te-combo");
  if (googleTranslateDropdown) {
    googleTranslateDropdown.value = lang;
    googleTranslateDropdown.dispatchEvent(new Event("change"));
    setTimeout(fixGoogleTranslateStyles, 1000);
  } else {
    console.error("Google Translate dropdown not found!");
  }
}

document
  .getElementById("language-select")
  .addEventListener("change", function () {
    let selectedLang = this.value;
    setTimeout(() => changeLanguage(selectedLang), 500);
  });

function fixGoogleTranslateStyles() {
  document.querySelectorAll("*").forEach((element) => {
    element.style.fontSize = "";
    element.style.lineHeight = "";
    element.style.letterSpacing = "";
  });
}

window.addEventListener("load", loadGoogleTranslate);

// Back to top button
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");
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
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

function filterFAQs() {
  let searchInput = document.getElementById("faq-search").value.toLowerCase();
  document.querySelectorAll(".faq").forEach((faq) => {
    let text = faq.innerText.toLowerCase();
    faq.style.display = text.includes(searchInput) ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".mobile-menu ul li a");
  const navbar = document.querySelector(".navbar");
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });
  menuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.querySelector(".search-bar button");
  const mobileSearchInput = document.getElementById("mobile-search-input");
  const mobileSearchBtn = document.querySelector(".mobile-search-bar button");
  function handleSearch(query) {
    query = query.trim().toLowerCase();
    const pages = {
      home: "../index.html",
      services: "../services.html",
      homestays: "../homestays.html",
      faq: "../faq.html",
      contact: "../contact.html",
      "privacy policy": "../pp.html",
      "terms and condition": "../t&c.html",
      service: "../services.html",
      homestay: "../homestays.html",
      faqs: "../faq.html",
      blogs: "../blog.html",
      blog: "../blog.html",
      Adventure: "../Adventure.html",
      Adventures: "../Adventure.html",
      pp: "../pp.html",
      "t&c": "../t&c.html",
    };
    if (pages[query]) {
      window.location.href = pages[query];
    } else {
      alert("No results found for: " + query);
    }
  }
  searchBtn.addEventListener("click", function () {
    if (searchInput.value.trim() !== "") {
      handleSearch(searchInput.value);
    }
  });
  mobileSearchBtn.addEventListener("click", function () {
    if (mobileSearchInput.value.trim() !== "") {
      handleSearch(mobileSearchInput.value);
    }
  });
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(searchInput.value);
    }
  });
  mobileSearchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch(mobileSearchInput.value);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const text =
    "India is home to some of the most beautiful and diverse trekking trails, ranging from the snow-covered peaks of the Himalayas to the lush green Western Ghats. Whether you're an experienced trekker or a beginner, there's a trail for everyone. Here are some of the top hiking trails that promise adventure, scenic beauty, and an unforgettable experience.";

  let index = 0;
  const introElement = document.querySelector(".intro");
  introElement.innerHTML = ""; // Clear initial text

  function typeEffect() {
    if (index < text.length) {
      introElement.innerHTML += text.charAt(index);
      introElement.classList.add("typing");
      index++;
      setTimeout(typeEffect, 30); // Adjust speed here (30ms per letter)
    } else {
      introElement.classList.remove("typing");
    }
  }

  setTimeout(typeEffect, 500); // Delay before typing starts
});
