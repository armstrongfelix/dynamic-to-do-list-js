document.addEventListener("DOMContentLoaded", () => {
  loadTasks();

  const form = document.getElementById("task-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
    if (taskText) {
      addTask(taskText, true);
      input.value = "";
    }
  });
});

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach((taskText) => addTask(taskText, false));
}

function addTask(taskText, save = true) {
  const list = document.getElementById("task-list");
  const li = document.createElement("li");
  li.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", function () {
    list.removeChild(li);
    removeTaskFromStorage(taskText);
  });

  li.appendChild(removeBtn);
  list.appendChild(li);

  if (save) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }
}

function removeTaskFromStorage(taskText) {
  let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks = storedTasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(storedTasks));
}
