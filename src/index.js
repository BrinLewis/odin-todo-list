import "./styles.css";
import "./assets/menu.svg";
import "./assets/home.svg";
import "./assets/plus.svg";
import "./assets/close-blue.svg";
import "./assets/close-red.svg";
import { renderFolders } from "./folder-logic";
import { createTodo } from "./todo-creator";
import { renderForm } from "./add-todo-form";

sidebarToggle();
createTodo(
  "Wash dishes",
  "Make sure to get all of them!",
  "2024-02-12",
  "orange",
  "Daily"
);
createTodo("Do nothing", "Shut up", "2023-04-15", "red");
createTodo(
  "Play video games",
  "COD, Halo, Flappy Bird",
  "2023-01-25",
  "cyan",
  "Weekly"
);
renderFolders();

// Plus button to call renderForm() - Event Listener
const plusBtn = document.getElementById("add-todo-button");
plusBtn.addEventListener("click", () => {
  let form = document.querySelector(".add-todo-form");

  if (!form) {
    renderForm();
  }
});

export function hoverCloseBtn(btn) {
  btn.addEventListener("mouseover", () => {
    btn.src = "./assets/close-red.svg";
  });
  btn.addEventListener("mouseout", () => {
    btn.src = "./assets/close-blue.svg";
  });
}
function sidebarToggle() {
  const toggleBtn = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });
}
