import "./styles.css";
import "./assets/menu.svg";
import "./assets/home.svg";
import "./assets/plus.svg";
import "./assets/close-blue.svg";
import "./assets/close-red.svg";
import { sidebarToggle } from "./sidebar-logic";
import { createTodo, renderTodos } from "./todo-creator";
import { renderForm, allFieldsFilled, clearForm } from "./add-todo-form";

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

// Plus button to call renderForm() - Event Listener
const plusBtn = document.getElementById("add-todo-button");
plusBtn.addEventListener("click", () => {
  let form = document.querySelector(".add-todo-form");

  if (!form) {
    renderForm();
  }
});

// Retrieve values needed to create a todo object from the form values.
export function getFormValues() {
  const title = document.getElementById("title");
  const description = document.getElementById("desc");
  const dueDate = document.getElementById("date");
  const priority = document.getElementById("priority-level");
  return {
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    priority: priority.value,
  };
}

export function formEventListeners() {
  // Form/Add button Event Listener
  const form = document.querySelector(".add-todo-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const valuesObj = getFormValues();

    if (allFieldsFilled(valuesObj)) {
      createTodo(
        valuesObj.title,
        valuesObj.description,
        valuesObj.dueDate,
        valuesObj.priority
      );

      clearForm();
    }
  });

  // Cancel button Event Listener
  const cancel = document.getElementById("cancel-todo-btn");
  cancel.addEventListener("click", () => {
    clearForm();
  });
}
