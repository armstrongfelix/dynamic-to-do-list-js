document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add tasks
  function addTask() {
    let taskText = taskInput.value.trim(); // get and trim input

    // Check if empty
    if (taskText !== "") {
      // Create a new li element
      const li = document.createElement("li");
      li.textContent = taskText;

      // Create a new remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";

      // Assign onclick event to remove the li element
      removeBtn.onclick = function () {
        taskList.removeChild(li);
      };

      // Append remove button to li, then li to taskList
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      // Clear the input field
      taskInput.value = "";
    }
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
