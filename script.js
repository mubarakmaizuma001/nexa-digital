/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

  const open = navMenu.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", open);

  menuBtn.innerHTML = open
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';

});


/* Close mobile menu when a link is clicked */

document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("open");

    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.innerHTML =
      '<i class="fa-solid fa-bars"></i>';

  });

});


/* ================= SCROLL REVEAL ================= */

const revealObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.12
  }

);


document.querySelectorAll(".reveal").forEach(element => {

  revealObserver.observe(element);

});


/* ================= COUNTERS ================= */

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (
        !entry.isIntersecting ||
        entry.target.dataset.done
      ) {
        return;
      }

      const counter = entry.target;

      const target = Number(
        counter.getAttribute("data-count")
      );

      let current = 0;

      const duration = 1600;

      const startTime = performance.now();


      function updateCounter(currentTime) {

        const progress =
          Math.min(
            (currentTime - startTime) / duration,
            1
          );

        current = Math.floor(
          progress * target
        );

        counter.textContent = current;

        if (progress < 1) {

          requestAnimationFrame(updateCounter);

        } else {

          counter.textContent = target;

          counter.dataset.done = "true";

        }

      }


      requestAnimationFrame(updateCounter);

    });

  },

  {
    threshold: 0.5
  }

);


counters.forEach(counter => {

  counterObserver.observe(counter);

});


/* ================= PORTFOLIO FILTER ================= */

const filterButtons =
  document.querySelectorAll(".filter");

const portfolioCards =
  document.querySelectorAll(".portfolio-card");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {

      btn.classList.remove("active");

    });

    button.classList.add("active");


    const filter =
      button.getAttribute("data-filter");


    portfolioCards.forEach(card => {

      const category =
        card.getAttribute("data-category");


      if (
        filter === "all" ||
        category === filter
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});


/* ================= CONTACT FORM ================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


contactForm.addEventListener("submit", event => {

  event.preventDefault();


  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const service =
    document.getElementById("service").value;

  const message =
    document.getElementById("message").value.trim();


  if (
    !name ||
    !email ||
    !service ||
    !message
  ) {

    formMessage.textContent =
      "Please complete all fields.";

    return;

  }


  formMessage.textContent =
    "Thank you! Your message has been received.";


  contactForm.reset();


  setTimeout(() => {

    formMessage.textContent = "";

  }, 5000);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 120;

    const sectionHeight =
      section.offsetHeight;


    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");


    const href =
      link.getAttribute("href");


    if (
      href === "#" + currentSection
    ) {

      link.classList.add("active");

    }

  });

});


/* ================= CURRENT YEAR ================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* ================= HEADER EFFECT ================= */

const header =
  document.querySelector(".header");


window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(10, 11, 15, 0.94)";

  } else {

    header.style.background =
      "rgba(10, 11, 15, 0.78)";

  }

});