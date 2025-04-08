document.querySelector("#push").onclick = function () {
    const taskInput = document.querySelector("#newtask input");
    const taskText = taskInput.value.trim();

    if (taskText.length === 0) {
        alert("Please Enter a Task");
    } else {
        const taskContainer = document.querySelector("#task");
        
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;

        taskContainer.appendChild(taskElement);

    
        taskInput.value = "";

        
        taskElement.querySelector(".delete").onclick = function () {
            taskContainer.removeChild(taskElement);
        }
    }
};



