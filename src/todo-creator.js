import {
  expandTodo,
  toggleTodoChecked,
  changePriority,
  updateText,
  deleteTodo,
} from "./todo-manipulation";
import { hoverCloseBtn } from ".";

export { allTodos, createTodo, renderTodos };

const allTodos = [];

function createTodo(title, description, dueDate, priority, folder) {
  let todo = {
    title,
    description,
    dueDate,
    priority,
    folder,
  };

  allTodos.push(todo);
  renderTodos();
  return todo;
}

function renderTodos() {
  clearTodos();
  allTodos.forEach((item, index) => {
    // Create elements
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo");
    todoContainer.id = `todo-item-${index + 1}`;

    const priorityIndicator = document.createElement("div");
    priorityIndicator.classList.add("priority");
    priorityIndicator.style.backgroundColor = item.priority;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = `checkbox-${index + 1}`;

    const checkboxLabel = document.createElement(`label`);
    checkboxLabel.setAttribute("for", `${checkbox.id}`);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("todo-info");

    const title = document.createElement("p");
    title.classList.add("todo-title");
    title.classList.add("info-item");
    title.setAttribute("contenteditable", true);
    title.textContent = item.title;

    const description = document.createElement("p");
    description.classList.add("todo-desc");
    description.classList.add("info-item");
    description.setAttribute("contenteditable", true);
    description.textContent = item.description;

    const date = document.createElement("input");
    date.setAttribute("type", "date");
    date.setAttribute("name", `duedate-${index + 1}`);
    date.setAttribute("id", `duedate-${index + 1}`);
    date.setAttribute("value", `${item.dueDate}`);

    const deleteBtn = document.createElement("img");
    deleteBtn.src = "./assets/close-blue.svg";
    deleteBtn.setAttribute("alt", "delete todo button");
    deleteBtn.classList.add("delete-todo");

    // Structure elements
    const todoList = document.querySelector(".todo-list");
    todoList.appendChild(todoContainer);

    const todoContainerChildren = [
      priorityIndicator,
      checkbox,
      checkboxLabel,
      infoContainer,
      date,
      deleteBtn,
    ];

    todoContainerChildren.forEach((element) => {
      todoContainer.appendChild(element);
    });

    infoContainer.appendChild(title);
    infoContainer.appendChild(description);
  });

  todoEventListeners();
}

function clearTodos() {
  const todoList = document.querySelector(".todo-list");

  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}

function todoEventListeners() {
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

  // Delete btn - Event Listeners
  const allDeleteTodoBtns = document.querySelectorAll(".delete-todo");
  allDeleteTodoBtns.forEach((btn) => {
    hoverCloseBtn(btn);

    btn.addEventListener("click", () => {
      deleteTodo(btn);
    })
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
  allInfoItems.forEach((item) => {
    item.addEventListener("blur", () => {
      updateText(item);
    });
  });
}
