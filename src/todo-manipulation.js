export { expandTodo, toggleTodoChecked, changePriorityColor };

function expandTodo(todo) {
  todo.classList.toggle("expanded");
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
    date.readOnly = true;
    date.setAttribute("style", "background-color: rgba(209, 209, 209, 0.651)");
  } else {
    todo.setAttribute("style", "background-color: white");
    infoContainer.removeAttribute(
      "style",
      "text-decoration: line-through; color: black;"
    );
    date.readOnly = false;
    date.setAttribute("style", "background-color: none");
  }
}

function changePriorityColor(priorityBtn) {
  switch (priorityBtn.style.backgroundColor) {
    case "red":
      priorityBtn.style.backgroundColor = "orange";
      break;
    case "orange":
      priorityBtn.style.backgroundColor = "white";
      break;
    case "white":
      priorityBtn.style.backgroundColor = "red";
      break;
    default:
      priorityBtn.style.backgroundColor = "red";
  }
}
