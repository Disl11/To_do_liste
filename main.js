
function displayLists(todolists) {
  //var todolist = { name: "ma todo", todos: ["abc", "azerty"] };

  //var  = [todolist, todolist];

  const area = document.querySelector("#area");
  area.innerHTML = "";

  for (let y = 0; y < todolists.length; y++) {

    const divList = document.createElement("div");
    divList.id = "list";
    
  const divNameList = createDivNameList(y, todolists);
    
    const divTask = document.createElement("div")
    divTask.id = "listTask";

    // fonction createBtnAddTask 

    const btnAddTask = document.createElement("button")
    btnAddTask.className = "addTask"
    btnAddTask.id = "btnAddTaskList-"+y;
    btnAddTask.innerHTML = "Ajouter Tâche";
    /*btnAddTask.add listneer click => add une tache vide
       qui appelle addEmptyTaskToList(todolists[y])
       puis
       displayLists(todos)
*/
    for (let i = 0; i < todolists[y].todos.length; i++) {
      //fonction createInputTask
      const inputTask = document.createElement("input");
      inputTask.id = "inputTaskList-"+y+"inputTask-"+i;
          /* listneer value changed 
       qui appelle updateTaskToList(todolists[y], todolists[y].todos[i])

       ex event
       input.addEventListener('change', (event) => {
    console.log("Valeur finale :", event.target.value);
  });
*/
      const deleteTask = document.createElement("button");
      deleteTask.className = "delete"
      deleteTask.id = "btnDeleteTaskList-"+y+"inputTask-"+i;
          /* listneer click 
       qui appelle deleteTaskToList(todolists[y], todolists[y].todos[i])
       displayLists(todos)
*/
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
  addEmptyTaskToList(newlist)
  todos.push(newList);
  displayLists(todos);
}

function createDivNameList(y, todolists){
  const divNameList = document.createElement("div");
    divNameList.className = "title-liste";
    const h3NameList = document.createElement("h3");
    h3NameList.id = "h3NameList";
    const inputNameList = document.createElement("input");
    // règle : l'id doit être unique
    inputNameList.id = "inputNameList-"+y;  // inputNameList-0 pour la première liste inputNameList-1 pour le seconde liste etc...
    inputNameList.value = todolists[y].name;

    h3NameList.appendChild(inputNameList);

    divNameList.appendChild(h3NameList);
const divNameBtn = document.createElement("div");
    divNameBtn.className = "regroup-btn";

    const btnEditList = document.createElement("button");
    btnEditList.className = "edit";
    btnEditList.id = "btnEditList-"+y;
    btnEditList.innerHTML = "✏️";
    divNameBtn.appendChild(btnEditList);

    const btnSupprList = document.createElement("button");
    btnSupprList.className = "delete";
    btnSupprList.id = "btnSupprList-"+y;
    btnSupprList.innerHTML = "X";

    divNameBtn.appendChild(btnSupprList);
    divNameList.appendChild(divNameBtn);

  return divNameList;
}

function addEmptyTaskToList(newlist) {
  newList.todos.push("");
}
function addTaskToList(todlist){
}

btnAjouter.addEventListener("click", addToDoList);




