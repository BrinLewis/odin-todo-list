export { sidebarToggle, renderFolders, folderDropdownOptions, updateFolder };
import { hoverCloseBtn } from ".";
import { renderTodos } from "./todo-creator";
import { deleteTodosFromFolder, getRelatedObject } from "./todo-manipulation";

// Sidebar Toggle Logic
function sidebarToggle() {
  const toggleBtn = document.getElementById("sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
  });
}

// Siderbar Folders Logic
const allFolders = ["Home", "Daily", "Weekly", "Homework"];

function renderFolders() {
  clearFolders();

  const foldersContainer = document.querySelector(".folders");
  const folderList = document.createElement("ul");
  foldersContainer.appendChild(folderList);

  allFolders.forEach((item) => {
    // Create Elements
    const folder = document.createElement("li");

    const folderName = document.createElement("p");
    folderName.textContent = item;
    folderName.classList.add("folder");

    const deleteFolderBtn = document.createElement("img");
    deleteFolderBtn.src = "./assets/close-blue.svg";
    deleteFolderBtn.alt = `delete ${item} folder button`;
    deleteFolderBtn.classList.add("delete-folder");

    // Structure Elements
    folderList.appendChild(folder);
    folder.appendChild(folderName);
    folder.appendChild(deleteFolderBtn);

    //Add Event Listeners
    folderName.addEventListener("click", () => {
      selectFolder(folderName);

      const folderToRender = folderName.textContent;
      renderTodos(folderToRender);
    });

    hoverCloseBtn(deleteFolderBtn);

    deleteFolderBtn.addEventListener("click", () => {
      deleteFolder(deleteFolderBtn);
    });
  });
}

function selectFolder(targetFolder) {
  const folders = document.querySelectorAll(".folder");
  folders.forEach((folder) => {
    if (folder !== targetFolder) {
      folder.classList.remove("selected");
    }
  });
  targetFolder.classList.toggle("selected");
}

function deleteFolder(clickedBtn) {
  const folderTextEl = clickedBtn.previousElementSibling;
  const folderName = folderTextEl.textContent;

  if (folderName === "Home") {
    alert("You cannot delete the home page");
    return;
  }

  const index = allFolders.indexOf(folderName);
  if (index !== -1) {
    allFolders.splice(index, 1);
  }

  deleteTodosFromFolder(folderName);

  renderFolders();
}

function clearFolders() {
  const folderContainer = document.querySelector(".folders");
  const existingList = folderContainer.querySelector("ul");
  if (existingList) {
    folderContainer.removeChild(existingList);
  }
}

function renderFolderForm() {
  // Create Elements
  const folderFormContainer = document.createElement("form");
  folderFormContainer.classList.add("new-folder-form");

  const formHeading = document.createElement("p");
  formHeading.classList.add("folder-form-heading");
  formHeading.textContent = "New Folder:";

  const formNameInput = document.createElement("input");
  formNameInput.setAttribute("type", "text");
  formNameInput.classList.add("form-name-input");

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("btns-container");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "button");
  submitBtn.id = "submit-folder-btn";
  submitBtn.textContent = "Add";

  const cancelBtn = document.createElement("button");
  cancelBtn.setAttribute("type", "button");
  cancelBtn.id = "cancel-folder-btn";
  cancelBtn.textContent = "Cancel";

  // Structure Elements
  const foldersContainer = document.querySelector(".folders");
  foldersContainer.appendChild(folderFormContainer);

  folderFormContainer.appendChild(formHeading);
  folderFormContainer.appendChild(formNameInput);
  folderFormContainer.appendChild(btnsContainer);

  btnsContainer.appendChild(submitBtn);
  btnsContainer.appendChild(cancelBtn);

  // Event Listeners
  submitBtn.addEventListener("click", () => {
    clearFolderForm();
    addNewFolder(formNameInput.value);
  });

  cancelBtn.addEventListener("click", () => {
    clearFolderForm();
  });
}

function addNewFolder(folderName) {
  allFolders.push(folderName);
  renderFolders();
}

const addFolderBtn = document.getElementById("add-folder-btn");
addFolderBtn.addEventListener("click", () => {
  let folderForm = document.querySelector(".new-folder-form");

  if (!folderForm) {
    renderFolderForm();
  }
});

function clearFolderForm() {
  const foldersContainer = document.querySelector(".folders");
  const folderFormContainer = document.querySelector(".new-folder-form");
  foldersContainer.removeChild(folderFormContainer);
}

function folderDropdownOptions(parent, folderName) {
  allFolders.forEach((folder) => {
    const option = document.createElement("option");
    option.value = folder;
    option.textContent = folder;
    if (folder === folderName) {
      option.selected = true;
    }
    parent.appendChild(option);
  });
}

function updateFolder(selectElement) {
  const todoObject = getRelatedObject(selectElement);
  todoObject.folder = selectElement.value;
}
