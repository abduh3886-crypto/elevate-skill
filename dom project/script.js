const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");



addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    
    const li = document.createElement("li");

    
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

   
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

  
    li.appendChild(span);
    li.appendChild(deleteBtn);

    
    taskList.appendChild(li);

  
    taskInput.value = "";

    updateCount();
});


// Update Total Counter
function updateCount() {
    taskCount.textContent = taskList.children.length;
}