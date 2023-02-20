export { allTodos, createTodo, renderTodos}

const allTodos = [];

function createTodo(title, description, dueDate, priority) {
  let todo = {
    title,
    description,
    dueDate,
    priority,
  }

  allTodos.push(todo);

  return todo;
}

function renderTodos() {
  allTodos.forEach((item, index) => {
    // Create elements
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo");

    const priorityIndicator = document.createElement("div");
    priorityIndicator.classList.add("priority");
    priorityIndicator.style.backgroundColor = item.priority;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = `todo-${index + 1}`;

    const checkboxLabel = document.createElement(`label`);
    checkboxLabel.setAttribute("for", `${checkbox.id}`);

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("todo-info");

    const title = document.createElement("p");
    title.classList.add("todo-title");
    title.setAttribute("contenteditable", true);
    title.textContent = item.title;

    const description = document.createElement("p");
    description.classList.add("todo-desc");
    description.setAttribute("contenteditable", true);
    description.textContent = item.description;

    const date = document.createElement("input");
    date.setAttribute("type", "date")
    date.setAttribute("name", `duedate-${index + 1}`);
    date.setAttribute("id", `duedate-${index + 1}`);
    date.setAttribute("value", `${item.dueDate}`);

    const deleteBtn = document.createElement("img");
    deleteBtn.src = "./assets/close-blue.svg";
    deleteBtn.setAttribute("alt", "delete todo button");
    deleteBtn.classList.add("delete-todo");

    // Structure elements
    const content = document.querySelector(".content");
    content.appendChild(todoContainer);

    const todoContainerChildren = [
      priorityIndicator,
      checkbox,
      checkboxLabel,
      infoContainer,
      date,
      deleteBtn,
    ];

    todoContainerChildren.forEach(element => {
      todoContainer.appendChild(element);
    })

    infoContainer.appendChild(title);
    infoContainer.appendChild(description);
  });
}
