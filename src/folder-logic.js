const folderNames = ["Home", "Daily", "Weekly", "Homework"];

// The folder names list will just be an array containing strings of each folder
// name. 
//
// The folder names will be rendered as li's in an unordered list, each of
// which will have a click listener that will take the textContent of the li
// that was clicked and call renderTodos, which will take the textContent, and 
// render only the todo objects which have the key:value pair of
// folder:*foldername*.
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
