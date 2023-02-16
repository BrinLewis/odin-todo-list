import "./styles.css";
import "./assets/menu.svg";
import "./assets/home.svg";
import "./assets/plus.svg";
import "./assets/close-blue.svg";
import "./assets/close-red.svg";

const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
});
