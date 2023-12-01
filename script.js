function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// make images with 'draggable = false' attribute undraggable
const img = document.querySelector("img");
img.setAttribute("draggable", false);