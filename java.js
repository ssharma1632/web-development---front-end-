
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
    };
    listItem.onclick = function(event) {
        if (event.target !== deleteButton) {
            listItem.classList.toggle('completed');
        }
    };
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    input.value = '';
}