
function displayLists(todolists) {
  //var todolist = { name: "ma todo", todos: ["abc", "azerty"] };

  //var  = [todolist, todolist];

  const area = document.querySelector("#area");
  area.innerHTML = "";

  for (let y = 0; y < todolists.length; y++) {

    const divList = document.createElement("div");
    divList.id = "list";
    const divNameList = document.createElement("div");
    divNameList.className = "title-liste";
    const h3NameList = document.createElement("h3");
    h3NameList.id = "h3NameList";
    const inputNameList = document.createElement("input");
    inputNameList.id = "inputNameList";
    inputNameList.value = todolists[y].name;



    h3NameList.appendChild(inputNameList);

    divNameList.appendChild(h3NameList);

    const divNameBtn = document.createElement("div");
    divNameBtn.className = "regroup-btn";

    const btnEditList = document.createElement("button");
    btnEditList.className = "edit";
    btnEditList.id = "btnEditList";
    btnEditList.innerHTML = "✏️";
    divNameBtn.appendChild(btnEditList);

    const btnSupprList = document.createElement("button");
    btnSupprList.className = "delete";
    btnSupprList.id = "btnSupprList";
    btnSupprList.innerHTML = "X";

    divNameBtn.appendChild(btnSupprList);
    divNameList.appendChild(divNameBtn);

    const divTask = document.createElement("div")
    divTask.id = "listTask";

    const btnAddTask = document.createElement("button")
    btnAddTask.className = "addTask"
    btnAddTask.id = "btnAddTask"
    btnAddTask.innerHTML = "Ajouter Tâche"


    for (let i = 0; i < todolists[y].todos.length; i++) {
      const inputTask = document.createElement("input");
      inputTask.id = "inputTask"

      const deleteTask = document.createElement("button");
      deleteTask.className = "delete"
      deleteTask.id = "btnDeleteTask"
      deleteTask.innerHTML = "X"
      inputTask.value = todolists[y].todos[i];

      const divIB = document.createElement("div");
      divIB.className = "divIB"

      divTask.appendChild(divIB)
      divIB.appendChild(inputTask);
      divIB.appendChild(deleteTask)

    }

    divList.appendChild(divNameList)
    divList.appendChild(divTask);

    divTask.appendChild(btnAddTask)
    area.appendChild(divList);
  }
}


let todos = [];
window.addEventListener("load", () => {
  todos = [];
  displayLists(todos);

});

const btnAjouter = document.querySelector(".ajouter");
const input = document.querySelector("#inputList")


function addToDoList() {

  const listname = input.value
  const newList = { name: listname, todos: [""] }

  input.value = "";

  todos.push(newList);
  displayLists(todos)
}

btnAjouter.addEventListener("click", addToDoList);



