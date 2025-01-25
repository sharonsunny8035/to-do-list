document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button onclick="toggleComplete(this)">Complete</button>
                <button onclick="deleteTask(this)" style="background-color: #f44336;">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
    }
});

function toggleComplete(button) {
    const span = button.parentElement.parentElement.querySelector('span');
    span.classList.toggle('completed');
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}
