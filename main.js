let todos = [];

// local storage
window.addEventListener("load", () => {
  // recuper le storage au chargement de la page
  let data = localStorage.getItem("todos");
  if (data) {
    todos = JSON.parse(data);
  } else {
    todos = [];
  }

  displayLists(todos);
});

// function pour sauvegarder les modification et l'enregistre dans le storage
function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// =========== function affichage list ===========

function displayLists(todolists) {
  const area = document.querySelector("#area");
  area.innerHTML = "";

  for (let y = 0; y < todolists.length; y++) {
    const divList = document.createElement("div");
    divList.id = "list";

    const divTask = document.createElement("div");
    divTask.id = "listTask";

    const divNameList = document.createElement("div");
    divNameList.className = "title-liste";

    const h3NameList = document.createElement("h3");
    h3NameList.id = "h3NameList";

    const inputNameList = document.createElement("input");
    inputNameList.id = "inputNameList-" + y;
    inputNameList.className = "inputNameList";
    inputNameList.value = todolists[y].name;

    inputNameList.addEventListener("change", (event) => {
      todolists[y].name = event.target.value;
      saveToDos();
    });

    // ===== dateTime fonctionel mais peu pas modifier le css ======
    const inputDateList = document.createElement("input");
    inputDateList.type = "datetime-local";
    inputDateList.value = todolists[y].date || "";
    inputDateList.className = "small-datetime";
    inputDateList.addEventListener("change", (event) => {
      updateListDate(todolists[y], event.target.value);
    });

    h3NameList.appendChild(inputNameList);
    divNameList.appendChild(h3NameList);

    const divNameBtn = document.createElement("div");
    divNameBtn.className = "regroup-btn";

    const btnSupprList = document.createElement("button");
    btnSupprList.className = "delete";
    btnSupprList.id = "btnSupprList-" + y;
    btnSupprList.innerHTML = '<i class="fas fa-trash-alt"></i>';

    btnSupprList.addEventListener("click", () => {
      deleteList(todos, y);
    });

    divNameBtn.appendChild(btnSupprList);
    divNameList.appendChild(divNameBtn);

    const btnAddTask = document.createElement("button");
    btnAddTask.className = "addTask";
    btnAddTask.id = "btnAddTaskList-" + y;
    btnAddTask.innerHTML = "Ajouter Tâche";

    // bouton add Task
    btnAddTask.addEventListener("click", () => {
      addEmptyTaskToList(todolists[y]);
      saveToDos();
      displayLists(todos);
    });

    // Boucle des tâches embriquer dans boucle des liste
    for (let i = 0; i < todolists[y].todos.length; i++) {
      const divIB = document.createElement("div");
      divIB.className = "divIB";
      divIB.draggable = true; // endre la tâche déplaçable
      divIB.dataset.listIndex = y; // index de la liste
      divIB.dataset.taskIndex = i; // index de la tâche

      //  DRAG START
      divIB.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData(
          "text/plain",
          JSON.stringify({
            fromList: y,
            fromIndex: i,
          })
        );
        event.dataTransfer.effectAllowed = "move";
      });

      // DRAG OVER
      divIB.addEventListener("dragover", (event) => {
        event.preventDefault();
        divIB.classList.add("drag-over");
      });

      //  DRAG LEAVE
      divIB.addEventListener("dragleave", () => {
        divIB.classList.remove("drag-over");
      });

      // DROP
      divIB.addEventListener("drop", (event) => {
        event.preventDefault();
        divIB.classList.remove("drag-over");

        const data = JSON.parse(event.dataTransfer.getData("text/plain"));
        moveTask(data.fromList, data.fromIndex, y, i);
      });

      const inputTask = document.createElement("input");
      inputTask.id = "inputTaskList-" + y + "inputTask-" + i;
      inputTask.value = todolists[y].todos[i];
      inputTask.placeholder = "Saisis ta tâche...";

      inputTask.addEventListener("change", (event) => {
        updateTaskToList(todolists[y], i, event.target.value);
      });

      const deleteTask = document.createElement("button");
      deleteTask.className = "delete";
      deleteTask.innerHTML = "X";
      deleteTask.addEventListener("click", () => {
        deleteTaskToList(todolists[y], i);
      });

      divIB.appendChild(inputTask);
      divIB.appendChild(deleteTask);
      divTask.appendChild(divIB);
    }

    divList.appendChild(divNameList);
    divList.appendChild(divTask);
    divTask.appendChild(btnAddTask);
    divTask.appendChild(inputDateList); // affichage date
    area.appendChild(divList);
  }
}

// ================ functions boutons + function drag and drop ===================

const btnAjouter = document.querySelector(".ajouter");

// function ajouter liste avec promte
function addToDoList() {
  const listname = prompt("Nom de la liste:");

  if (!listname || listname.trim() === "") {
    return;
  }

  const newList = { name: listname.trim(), todos: [""] };
  todos.push(newList);
  saveToDos();
  displayLists(todos);
}

btnAjouter.addEventListener("click", addToDoList);

// function ajouter une liste vide
function addEmptyTaskToList(todolist) {
  todolist.todos.push("");
}

// function update une task
function updateTaskToList(todolist, i, newValue) {
  todolist.todos[i] = newValue;
  saveToDos();
}

// Function suprimer une lisete
function deleteList(todolists, index) {
  todolists.splice(index, 1);
  saveToDos();
  displayLists(todos);
}

// function suprimer une tache
function deleteTaskToList(todolist, i) {
  todolist.todos.splice(i, 1);
  saveToDos();
  displayLists(todos);
}

// Fonction pour déplacer la tâche
function moveTask(fromList, fromIndex, toList, toIndex) {
  if (fromList === toList && fromIndex === toIndex) return;

  const task = todos[fromList].todos.splice(fromIndex, 1)[0];
  todos[toList].todos.splice(toIndex, 0, task);

  saveToDos();
  displayLists(todos);
}

// function pour date
function updateListDate(todolist, newDate) {
  todolist.date = newDate;
  saveToDos();
}
