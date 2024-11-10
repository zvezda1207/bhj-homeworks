document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task__input");
    const taskForm = document.getElementById("tasks__form");
    const taskList = document.getElementById("tasks__list");
    
    const addTask = (title) => {
        taskList.insertAdjacentHTML('afterbegin', `
            <div class="task">
            <div class="task__title">
            ${title}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>
            `);

            const taskRemove = document.querySelector(".task__remove");
            taskRemove.addEventListener("click", (event) => {
                event.preventDefault();
                taskRemove.closest(".task").remove();
            });   
        };

    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const taskText = taskInput.value.trim();

        if (taskText) {
            addTask(taskText);
            taskInput.value = "";
        }
    });
}); 



