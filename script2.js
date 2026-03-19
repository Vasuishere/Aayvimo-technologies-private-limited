/* ================= NAVBAR SCROLL ================= */
function initNavbar() {
  const nav = document.getElementById("navbar");

  function handleScroll() {
    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // run on load
}

/* ================= MOBILE MENU ================= */
function initMobileMenu() {
  const ham = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");

  if (!ham || !menu) return;

  ham.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

/* ================= CLOSE MENU ================= */
function closeMobileMenu() {
  document.getElementById("mobile-menu")?.classList.remove("open");
}

/* ================= SMOOTH SCROLL ================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        e.preventDefault();
        closeMobileMenu();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/* ================= ACTIVE NAV LINK ================= */
function initActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach((sec) => observer.observe(sec));
}

/* ================= CONTACT FORM ================= */
function initContactForm() {
  const btn = document.querySelector(".contact-form button");

  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();

    if (!name || !email) {
      btn.textContent = "⚠️ Please fill required fields";
      return;
    }

    btn.textContent = "✅ Message Sent!";
    btn.disabled = true;
  });
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initActiveNavLink();
  initContactForm();
});