// Select HTML elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('todos')) || [];

// Render tasks on the page
function renderTasks() {
    // Clear old list
    todoList.innerHTML = '';

    // Loop through all tasks
    tasks.forEach((task, index) => {
        const li = document.createElement('li');

        // Add completed class if task is completed
        li.className = task.completed ? 'completed' : '';

        // Create task and delete button
        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button onclick="deleteTask(${index})">❌</button>
        `;

        // Add task to list
        todoList.appendChild(li);
    });

    // Save tasks after every update
    saveToStorage();
}

// Add a new task
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = todoInput.value.trim();

    if (text !== '') {
        tasks.push({
            text: text,
            completed: false
        });

        todoInput.value = '';

        renderTasks();
    }
});

// Toggle completed status
window.toggleTask = function(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

// Delete task
window.deleteTask = function(index) {
    tasks.splice(index, 1);
    renderTasks();
};

// Save tasks in localStorage
function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(tasks));
}

// Show tasks when page loads
renderTasks();