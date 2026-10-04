const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

if (menu && links) {
  menu.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  document.querySelectorAll(".links a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });
}

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Scroll-triggered reveal for sections, cards and the process path.
const revealTargets = document.querySelectorAll(".reveal, .path");

if (revealTargets.length) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    // No IntersectionObserver support: just show everything.
    revealTargets.forEach((el) => el.classList.add("in-view"));
  }

  // Failsafe: if something never fires (layout quirks, hidden tabs),
  // don't leave content invisible forever.
  window.setTimeout(() => {
    revealTargets.forEach((el) => el.classList.add("in-view"));
  }, 2500);
}