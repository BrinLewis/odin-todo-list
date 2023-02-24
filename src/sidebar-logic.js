export { sidebarToggle, renderFolders };
import { hoverCloseBtn } from ".";
import { deleteTodosFromFolder } from "./todo-manipulation";

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
    });

    hoverCloseBtn(deleteFolderBtn);

    deleteFolderBtn.addEventListener("click", () => {
      deleteFolder(deleteFolderBtn);
    })
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

// The folder names list will just be an array containing strings of each folder             XXXXXXX
// name.
//
// The folder names will be rendered as p and img elements inside li's in an unordered       XXXXXXXX
// list, each of which p will have a click listener that will take the textContent          
// of the p that was clicked and call renderTodos, which will take the                      
// textContent, and render only the todo objects which have the key:value pair
// of folder:*foldername*.
//
// Each img will be a cross blue cross icon (switches to red on hover) and will       XXXXXXXXX
// have an id of delete-*foldername* and click listener that will remove all          XXXXXXXX
// the item *foldername* from the array and also delete the todo's with the           XXXXXXXX
// key:value pair of folder:*foldername*                                              XXXXXXXX
//
// Will need an event listener on the plus icon next to Folders on the sidebar.
// This event listener will call renderFolderForm, which will add a small form
// containing a text input and two buttons (add, cancel) underneath the list.

// On submission of this form, it will call removeFolderForm, and addNewFolder,
// which will take the value of the text input and add an li with that value as
// its textContent. addNewFolder will also use folderNames.push(newFolderName)
// to add it to the array.
//
// This means that the todo creation form will need to ask what folder you'd
// like to put the todo in and then createTodo will take in that answer and put
// it as a property of the object so that it can be read by renderTodos.
