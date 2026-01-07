const projects = document.querySelectorAll(".project");
projects.forEach(project => {
  const descDiv = project.querySelector(".pri1");
  descDiv.textContent = project.getAttribute("pri2");
  project.addEventListener("mouseenter", () => {
    project.classList.add("hovered");
    descDiv.style.display = "block";
  });
  project.addEventListener("mouseleave", () => {
    project.classList.remove("hovered");
    descDiv.style.display = "none";
  });
});
