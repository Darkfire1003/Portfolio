/*==========================
          burger
  =========================*/

const burger = document.getElementById("burger");
const navBar = document.getElementById("navBar");

if (burger && navBar) {
  burger.addEventListener("click", function () {
    const isOpen = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", isOpen ? "false" : "true");
    burger.classList.toggle("is-active");
    navBar.classList.toggle("hidden");
  });

  // Menü auf Mobile schließen, wenn auf einen Link geklickt wird
  navBar.querySelectorAll("a.navhover").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        burger.classList.remove("is-active");
        navBar.classList.add("hidden");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  });
}

/*==========================
          skills
  =========================*/

const skillsList = document.querySelector("#skills-list");

skillsList.innerHTML = skills
  .map(
    (skill) => `
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <div class="font-bold text-fg">${skill.name}</div>
          <span class="text-[12px] text-muted">${skill.pct}%</span>
        </div>
        <div class="h-2 w-full rounded-2xl bg-white overflow-hidden">
          <div class="h-full rounded-2xl bg-primary" style="width: ${skill.pct}%"></div>
        </div>
      </div>
    `,
  )
  .join("");

/*==========================
          Tools
  =========================*/

const toolsList = document.querySelector("#tools-list");

toolsList.innerHTML = tools
  .map(
    (tool) =>
      `<span class="px-3 py-1 rounded-full border border-border text-muted text-sm">${tool}</span>`,
  )
  .join("");

/*==========================
          Projekte
  =========================*/

const carousel = document.querySelector("#carousel");
const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalText = document.querySelector("#modal-text");
const modalTags = document.querySelector("#modal-tags");
const modalImage = document.querySelector("#modal-image");
const modalYear = document.querySelector("#modal-year");
const modalLive = document.querySelector("#modal-live");
const modalGithub = document.querySelector("#modal-github");
const modalClose = document.querySelector("#modal-close");
const modalOverlay = document.querySelector("#project-modal .modal__overlay");

carousel.innerHTML = projectsData
  .map(
    (project) => `
      <article
        class="project-card group snap-center flex-none w-75 md:w-95 rounded-2xl overflow-hidden border border-border bg-[rgba(26,26,26,.75)] backdrop-blur-xl cursor-pointer shadow-[0_20px_60px_rgba(0,0,0,.35)]"
        data-title="${project.title}"
        data-description="${project.description}"
        data-long-description="${project.longDescription}"
        data-image="${project.image}"
        data-link="${project.link}"
        data-github="${project.github}"
        data-tags="${project.tags.join("|")}"
        data-year="${project.year}"
      >
        <div class="relative  aspect-video overflow-hidden bg-card">
          <h3 class=" z-10 text-xl font-bold px-4 py-3">${project.title}</h3>
          <img src="${project.image}" alt="${project.title}" class="card-img w-full h-full object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-[rgba(14,14,14,.85)] to-transparent"></div>
        </div>
        <div class="p-6">
          <p class="text-[14px] leading-[1.7] text-muted mb-5">${project.description}</p>
          <div class="flex flex-wrap gap-2">
            ${project.tags
              .map(
                (tag) =>
                  `<span class="px-3 py-1 rounded-full border border-accent text-[11px] text-white/65">${tag}</span>`,
              )
              .join("")}
          </div>
        </div>
      </article>
    `,
  )
  .join("");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.longDescription;
    modalYear.textContent = card.dataset.year;
    modalImage.src = card.dataset.image;
    modalImage.alt = card.dataset.title;
    modalLive.href = card.dataset.link;
    modalGithub.href = card.dataset.github;

    modalTags.innerHTML = card.dataset.tags
      .split("|")
      .map(
        (tag) =>
          `<span class="px-3 py-1 rounded-full border border-accent text-[14px] text-white/65">${tag}</span>`,
      )
      .join("");

    modal.classList.remove("hidden");
  });
});

modalClose.addEventListener("click", () => modal.classList.add("hidden"));
modalOverlay.addEventListener("click", () => modal.classList.add("hidden"));

let hoverTimer;

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }, 120);
  });
});

/*==========================
        Kontakformular
  =========================*/

const contactForm = document.getElementById("contact-form");
const formSuccess = document.getElementById("form-success");
const formSubmit = document.getElementById("form-submit");

if (contactForm && formSuccess && formSubmit) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const originalText = formSubmit.textContent;
    formSubmit.disabled = true;
    formSubmit.textContent = "Sende...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        contactForm.reset();
        contactForm.classList.add("hidden");
        formSuccess.classList.remove("hidden");
      } else {
        alert("Beim Senden ist etwas schiefgelaufen.");
      }
    } catch (error) {
      alert("Netzwerkfehler. Bitte später nochmal versuchen.");
    } finally {
      formSubmit.disabled = false;
      formSubmit.textContent = originalText;
    }
  });
}
