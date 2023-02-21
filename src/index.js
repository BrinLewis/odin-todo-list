import "./styles.css";
import "./assets/menu.svg";
import "./assets/home.svg";
import "./assets/plus.svg";
import "./assets/close-blue.svg";
import "./assets/close-red.svg";
import { sidebarToggle } from "./sidebar-logic";
import { createTodo, renderTodos } from "./todo-creator";
import {
  expandTodo,
  toggleTodoChecked,
  changePriority,
  updateText
} from "./todo-manipulation";

sidebarToggle();

// Temp filler todo's
createTodo(
  "Wash dishes",
  "Make sure to get all of them!",
  "2024-02-12",
  "orange"
);
createTodo("Do nothing", "Shut up", "2023-04-15", "red");
createTodo("Play video games", "COD, Halo, Flappy Bird", "2023-01-25", "white");
renderTodos();

// Expand - Event Listener
const allTodoElements = document.querySelectorAll(".todo");
allTodoElements.forEach((todo) => {
  const infoContainer = todo.querySelector(".todo-info");

  todo.addEventListener("click", (event) => {
    if (todo !== event.target && infoContainer !== event.target) {
      return;
    }
    expandTodo(todo);
  });
});

// Checkbox - Event Listener
const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
allCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    toggleTodoChecked(checkbox);
  });
});

// Delete btn color change - Event Listener
const allDeleteTodoBtns = document.querySelectorAll(".delete-todo");
allDeleteTodoBtns.forEach((btn) => {
  btn.addEventListener("mouseover", () => {
    btn.src = "./assets/close-red.svg";
  });

  btn.addEventListener("mouseout", () => {
    btn.src = "./assets/close-blue.svg";
  });
});

// Priority color - Event Listener
const allPriorityBtns = document.querySelectorAll(".priority");
allPriorityBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    changePriority(btn);
  });
});

// Update object info with inputted DOM info - Event Listener
const allInfoItems = document.querySelectorAll(".info-item");
allInfoItems.forEach(item => {
  item.addEventListener("blur", () => {
    updateText(item);
  })
})