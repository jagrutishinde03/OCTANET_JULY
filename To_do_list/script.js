document.querySelector('#push').onclick = function() {
    const taskSubjectInput = document.querySelector('#task-subject');
    const taskDescriptionInput = document.querySelector('#task-description');
    const categorySelect = document.querySelector('#category-select');
    const tasksContainer = document.querySelector('#tasks');

    if (taskSubjectInput.value.length == 0) {
        alert("Please enter a task subject");
    } else if (taskDescriptionInput.value.length == 0) {
        alert("Please enter a task description");
    } else if (categorySelect.value == 'none') {
        alert("Please select a category");
    } else {
        const taskNumber = tasksContainer.children.length; // Get the number of existing tasks

        const newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.dataset.category = categorySelect.value;

        const taskNumberSpan = document.createElement('span');
        taskNumberSpan.classList.add('task-number');
        taskNumberSpan.textContent = taskNumber;

        const taskSubjectSpan = document.createElement('span');
        taskSubjectSpan.classList.add('task-subject');
        taskSubjectSpan.textContent = taskSubjectInput.value;

        const taskDescriptionSpan = document.createElement('span');
        taskDescriptionSpan.classList.add('task-description');
        taskDescriptionSpan.textContent = taskDescriptionInput.value;

        const categorySpan = document.createElement('span');
        categorySpan.classList.add('category');
        categorySpan.textContent = categorySelect.value.charAt(0).toUpperCase() + categorySelect.value.slice(1);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('far', 'fa-trash-alt');
        deleteButton.appendChild(deleteIcon);

        newTask.appendChild(taskNumberSpan);
        newTask.appendChild(taskSubjectSpan);
        newTask.appendChild(taskDescriptionSpan);
        newTask.appendChild(categorySpan);
        newTask.appendChild(deleteButton);

        tasksContainer.appendChild(newTask);

        var currentTasks = document.querySelectorAll(".delete");
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function() {
                this.parentNode.remove();
                updateTaskNumbers(); // Update the task numbers after deleting a task
            };
        }

        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            };
        }

        taskSubjectInput.value = "";
        taskDescriptionInput.value = "";
        categorySelect.value = "none";
    }
};
