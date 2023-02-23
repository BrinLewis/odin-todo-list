export { renderForm, allFieldsFilled, clearForm };

import { formEventListeners } from ".";

function renderForm() {
  // Create Elements
  const form = document.createElement("form");
  form.classList.add("add-todo-form");

  const heading = document.createElement("p");
  heading.classList.add("new-item-heading");
  heading.textContent = "Add New ToDo:";

  const titleContainer = document.createElement("div");
  titleContainer.classList.add("new-todo-info");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "title");
  titleLabel.textContent = "Title:";

  const title = document.createElement("input");
  title.setAttribute("type", "text");
  title.id = "title";
  title.setAttribute("placeholder", "E.g. Visit Grandma");

  const descContainer = document.createElement("div");
  descContainer.classList.add("new-todo-info");

  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "desc");
  descLabel.textContent = "Description:";

  const description = document.createElement("input");
  description.setAttribute("type", "text");
  description.id = "desc";
  description.setAttribute("placeholder", "Bring her some chocolate");

  const datePriorityContainer = document.createElement("div");
  datePriorityContainer.classList.add("date-prio-container");

  const dateContainer = document.createElement("div");

  const dateLabel = document.createElement("label");
  dateLabel.setAttribute("for", "date");
  dateLabel.textContent = "Due Date:";

  const date = document.createElement("input");
  date.setAttribute("type", "date");
  date.id = "date";

  const priorityContainer = document.createElement("div");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority-level");
  priorityLabel.textContent = "Priority Level:";

  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.id = "priority-level";

  const options = [];
  function renderOption(value, textContent, isSelected) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = textContent;
    option.selected = isSelected;
    options.push(option);
  }
  renderOption("red", "High");
  renderOption("orange", "Medium");
  renderOption("white", "Low", true);

  const formBtns = document.createElement("div");
  formBtns.classList.add("form-btns");

  const submitBtn = document.createElement("button");
  submitBtn.id = "submit-todo-btn";
  submitBtn.textContent = "Add";

  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.id = "cancel-todo-btn";
  cancelBtn.textContent = "Cancel";

  // Structure Elements
  const content = document.querySelector(".content");
  content.appendChild(form);

  const formItems = [
    heading,
    titleContainer,
    descContainer,
    datePriorityContainer,
    formBtns,
  ];

  formItems.forEach((item) => {
    form.appendChild(item);
  });

  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(title);

  descContainer.appendChild(descLabel);
  descContainer.appendChild(description);

  datePriorityContainer.appendChild(dateContainer);
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(date);

  datePriorityContainer.appendChild(priorityContainer);
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);

  options.forEach((option) => {
    prioritySelect.appendChild(option);
  });

  formBtns.appendChild(submitBtn);
  formBtns.appendChild(cancelBtn);

  // Add the event listeners once form is rendered
  formEventListeners();
}

function allFieldsFilled(todoObj) {
  if (Object.values(todoObj).includes("")) {
    alert("One or more fields are empty, please fill in all fields");
    return false;
  } else {
    return true;
  }
}

function clearForm() {
  const content = document.querySelector(".content");
  const form = document.querySelector(".add-todo-form");
  content.removeChild(form);
}
