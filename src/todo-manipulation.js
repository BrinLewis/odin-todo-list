import { allTodos, renderTodos } from "./todo-creator";

export {
  expandTodo,
  toggleTodoChecked,
  changePriority,
  updateText,
  updateDate,
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
  const date = todo.querySelector("input[type='date']");
  const todoObj = getRelatedObject(box);

  todo.classList.toggle("checked");

  if (todo.classList.contains("checked")) {
    date.disabled = true;
    todoObj.checked = true;
  } else {
    date.disabled = false;
    todoObj.checked = true;
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

function updateDate(dateInput) {
  const todoObject = getRelatedObject(dateInput);
  todoObject.dueDate = dateInput.value;
}

function deleteTodo(clickedBtn) {
  const todoObj = getRelatedObject(clickedBtn);
  const index = allTodos.indexOf(todoObj);
  allTodos.splice(index, 1);
  renderTodos();
}

function deleteTodosFromFolder(folderName) {
  let i = 0;

  while (i < allTodos.length) {
    const todo = allTodos[i];

    if (todo.folder === folderName) {
      allTodos.splice(i, 1);
    } else {
      i += 1;
    }
  }

  renderTodos();
}
