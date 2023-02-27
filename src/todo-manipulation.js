import { allTodos, renderTodos } from "./todo-creator";

export {
  expandTodo,
  toggleTodoChecked,
  changePriority,
  updateText,
  deleteTodo,
  deleteTodosFromFolder,
  getRelatedObject,
};

function expandTodo(target) {
  const todoElements = document.querySelectorAll(".todo");
  todoElements.forEach((el) => {
    if (el !== target) {
      el.classList.remove("expanded");
    }
  });

  target.classList.toggle("expanded");
}

function toggleTodoChecked(box) {
  const todo = box.parentNode;
  const infoContainer = todo.querySelector(".todo-info");
  const date = todo.querySelector("input[type='date']");

  if (box.checked) {
    todo.setAttribute("style", "background-color: rgba(209, 209, 209, 0.651)");
    infoContainer.setAttribute(
      "style",
      "text-decoration: line-through; color: rgb(90, 90, 90);"
    );
    date.disabled = true;
  } else {
    todo.setAttribute("style", "background-color: white");
    infoContainer.removeAttribute(
      "style",
      "text-decoration: line-through; color: black;"
    );
    date.disabled = false;
  }
}

function changePriorityColor(priorityBtn) {
  switch (priorityBtn.style.backgroundColor) {
    case "red":
      priorityBtn.style.backgroundColor = "orange";
      break;
    case "orange":
      priorityBtn.style.backgroundColor = "cyan";
      break;
    case "cyan":
      priorityBtn.style.backgroundColor = "red";
      break;
    default:
      priorityBtn.style.backgroundColor = "red";
  }
}

function getRelatedObject(element) {
  let todoContainer;
  if (element.classList.contains("todo")) {
    todoContainer = element;
  } else if (element.classList.contains("info-item")) {
    todoContainer = element.parentNode.parentNode;
  } else {
    todoContainer = element.parentNode;
  }

  const todoId = todoContainer.id;
  const index = todoId.slice(-1) - 1;
  const object = allTodos[index];

  return object;
}

function changePriority(priorityBtn) {
  changePriorityColor(priorityBtn);

  const todoObject = getRelatedObject(priorityBtn);
  todoObject.priority = priorityBtn.style.backgroundColor;
}

function updateText(infoItem) {
  const todoObject = getRelatedObject(infoItem);
  if (infoItem.classList.contains("todo-title")) {
    todoObject.title = infoItem.textContent;
  } else {
    todoObject.description = infoItem.textContent;
  }
}

function deleteTodo(clickedBtn) {
  const todoObj = getRelatedObject(clickedBtn);
  const index = allTodos.indexOf(todoObj);
  allTodos.splice(index, 1);
  renderTodos();
}

function deleteTodosFromFolder(folderName) {
  allTodos.forEach((todoObj) => {
    if (todoObj.folder === folderName) {
      const index = allTodos.indexOf(todoObj);
      allTodos.splice(index, 1);
    }
  });
  renderTodos();
}
