document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task__input");
    const taskForm = document.getElementById("tasks__form");
    const taskList = document.getElementById("tasks__list");

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    const addTask = (text) => {
        const task = document.createElement("div");
        task.classList.add("task");

        const taskTitle = document.createElement("div");
        taskTitle.classList.add("task__title");
        taskTitle.textContent = text;

        const taskRemove = document.createElement("a");
        taskRemove.classList.add("task__remove");
        taskRemove.innerHTML = "&times;";
        taskRemove.addEventListener("click", () => {
        task.remove();
        });

        task.appendChild(taskTitle);
        task.appendChild(taskRemove);
        taskList.appendChild(task);
    };

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const taskText = taskInput.value.trim();

        if (taskText) {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            const taskText = taskInput.value.trim();

            if (taskText) {
                addTask(taskText);
                taskInput.value = "";
            }
        }
    });
}); 