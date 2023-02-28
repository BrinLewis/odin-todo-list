import "./styles.css";
import "./assets/menu.svg";
import "./assets/home.svg";
import "./assets/plus.svg";
import "./assets/close-blue.svg";
import "./assets/close-red.svg";
import { renderFolders, selectFolder } from "./folder-logic";
import { createTodo, renderTodos } from "./todo-creator";
import { renderForm } from "./add-todo-form";

sidebarToggle();
createTodo(
  "Wash dishes",
  "Make sure to get all of them!",
  "2023-02-12",
  "orange",
  "Home"
);
createTodo("Do nothing", "Nothing at all", "2023-02-15", "red", "Daily");
createTodo(
  "Play video games",
  "COD, Halo, Flappy Bird",
  "2023-01-25",
  "cyan",
  "Weekly"
);
renderFolders();

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

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
  const allFolders = document.querySelectorAll(".folder");
  allFolders.forEach((folder) => {
    if (folder.textContent === "Home") {
      selectFolder(folder);
    }
  });

  renderTodos();
});

export function renderHeader() {
  const currentFolderHeader = document.querySelector(".current-folder-header");
  const selectedFolder = document.querySelector(".selected");
  if (selectedFolder) {
    currentFolderHeader.textContent = selectedFolder.textContent;
  } else {
    currentFolderHeader.textContent = "Home";
  }
}
