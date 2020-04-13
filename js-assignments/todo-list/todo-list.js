let ulElementId = document.getElementById('toDisplayTheContent');
document.getElementById('showToDoItemsInput').onchange = (event) => {
    let userInput = event.target.value;

    let toDoListItem = document.createElement("LI");
    toDoListItem.setAttribute("class", "todo-list-item");

    let todoUserInput = document.createElement('INPUT');
    todoUserInput.setAttribute("value", userInput);

    let checkbox = document.createElement('INPUT');
    checkbox.setAttribute("type", "checkbox");

    let removeButton = document.createElement('BUTTON');
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("value", "X");

    toDoListItem.appendChild(checkbox);
    toDoListItem.appendChild(todoUserInput);
    toDoListItem.appendChild(removeButton);
    ulElementId.appendChild(toDoListItem);

}
