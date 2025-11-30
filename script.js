document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add tasks
  function addTask() {
    let taskText = taskInput.value.trim(); // get and trim input

    // Check if empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Remove task on click
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append and clear input
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }

  // Add button listener
  addButton.addEventListener("click", addTask);

  // Add task on pressing Enter
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
