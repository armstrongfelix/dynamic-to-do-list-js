// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the "Add Task" button
  const addButton = document.getElementById("add-task-btn");
  // Select the input field for entering tasks
  const taskInput = document.getElementById("task-input");
  // Select the unordered list that will display the tasks
  const taskList = document.getElementById("task-list");

  // Function to add a new task to the list
  function addTask() {
    // Retrieve and trim the value from the task input field
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item (li) element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Assign an onclick event to remove the task when clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);
    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Add event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Add event listener to the input field for the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Optionally, call addTask on DOMContentLoaded if needed (usually not required for empty list)
  // addTask();
});
