// app.js

document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');
        
        // Add the task text to the li element
        li.textContent = taskText;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        
        // When the delete button is clicked, remove the task
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Add a click event to toggle completion
        li.addEventListener('click', () => {
            li.classList.toggle('complete');
        });

        // Append the delete button to the li
        li.appendChild(deleteButton);

        // Append the new task to the list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add task when the "Add Task" button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Optional: Allow adding task by pressing 'Enter'
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

