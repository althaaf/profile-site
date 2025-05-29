// Sample data for each project
const projects = {
  "weather-app": {
    title: "Weather App",
    description:
      "A responsive web app that shows current weather and forecast for any city. " +
      "Built with HTML, CSS, and vanilla JS using the OpenWeatherMap API.",
    link: "project-weather-app.html"
  },
  "todo-list": {
    title: "To-Do List",
    description:
      "An interactive to-do list application. " +
      "Users can add, edit, and remove tasks. Data persists in localStorage.",
    link: "project-todo-list.html"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  const titleEl = document.getElementById("modal-title");
  const descEl = document.getElementById("modal-description");
  const linkEl = document.getElementById("modal-link");
  const closeBtn = document.getElementById("modal-close");

  // Open modal when “More Info” is clicked
  document.querySelectorAll(".more-info").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const id = card.getAttribute("data-id");
      const data = projects[id];

      titleEl.textContent = data.title;
      descEl.textContent = data.description;
      linkEl.href = data.link;

      modal.setAttribute("aria-hidden", "false");
      closeBtn.focus();
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
  });

  // Close on ESC key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      modal.setAttribute("aria-hidden", "true");
    }
  });
});
