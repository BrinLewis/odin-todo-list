const folderNames = [];

// The folder names list will just be an array containing strings of each folder
// name. The folder names will be rendered as li's in an unordered list, each of
// which will have an click listener that will take the textContent of the li
// that was clicked and call renderTodos, using the textContent.toLowerCase as
// the folderName input.
//
// When you click a folder name, it will call renderTodos, which will now take
// what folder you want, then render only the todo objects which have the 
// key:value pair of folder:*foldername*.
// 
// This means that the form will need to ask what folder you'd like to put the 
// todo you're creating in and then createTodo will take in that answer and put
// it as a property of the object so that it can be read by renderTodos.
