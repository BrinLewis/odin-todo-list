export { renderForm, allFieldsFilled, clearForm };

import { createTodo } from "./todo-creator";
import { folderDropdownOptions } from "./folder-logic";

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
  dateLabel.textContent = "Due Date: ";

  const date = document.createElement("input");
  date.setAttribute("type", "date");
  date.id = "date";

  const priorityContainer = document.createElement("div");

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "priority-level");
  priorityLabel.textContent = "Priority Level: ";

  const prioritySelect = document.createElement("select");
  prioritySelect.setAttribute("name", "priority");
  prioritySelect.id = "priority-level";
  prioritySelect.classList.add("select");

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
  renderOption("cyan", "Low", true);

  const folderSelectorContainer = document.createElement("div");
  folderSelectorContainer.classList.add("folder-selector-container");

  const folderSelectorLabel = document.createElement("label");
  folderSelectorLabel.setAttribute("for", "folder-selector");
  folderSelectorLabel.textContent = "Folder: "

  const folderSelector = document.createElement("select");
  folderSelector.setAttribute("name", "new-todo-folder-select");
  folderSelector.classList.add("select");
  folderSelector.id = "folder-selector";

  folderDropdownOptions(folderSelector);

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
    folderSelectorContainer,
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

  folderSelectorContainer.appendChild(folderSelectorLabel);
  folderSelectorContainer.appendChild(folderSelector);

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

function getFormValues() {
  const title = document.getElementById("title");
  const description = document.getElementById("desc");
  const dueDate = document.getElementById("date");
  const priority = document.getElementById("priority-level");
  const folder = document.getElementById("folder-selector");
  return {
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    priority: priority.value,
    folder: folder.value
  };
}

function formEventListeners() {
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
        valuesObj.priority,
        valuesObj.folder
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
