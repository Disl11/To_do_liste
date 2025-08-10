
function displayLists(todolists) {
  //var todolist = { name: "ma todo", todos: ["abc", "azerty"] };

  //var todolits = [todolist, todolist];

  const area = document.querySelector("#area");
  area.innerHTML = "";

  for (let y = 0; y < todolists.length; y++) {

    const divList = document.createElement("div");
    divList.id = "list";
    
  
    const divTask = document.createElement("div")
    divTask.id = "listTask";
    const divNameList = document.createElement("div");
    divNameList.className = "title-liste";
    const h3NameList = document.createElement("h3");
    h3NameList.id = "h3NameList";
    const inputNameList = document.createElement("input");
    // règle : l'id doit être unique
    inputNameList.id = "inputNameList-" + y;  // inputNameList-0 pour la première liste inputNameList-1 pour le seconde liste etc...
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

    const btnAddTask = document.createElement("button")
    btnAddTask.className = "addTask"
    btnAddTask.id = "btnAddTaskList-"+ y;
    btnAddTask.innerHTML = "Ajouter Tâche";


    // Bouton add task
    btnAddTask.addEventListener("click", () => {
      addEmptyTaskToList(y);
      displayLists(todos);

    } )

    for (let i = 0; i < todolists[y].todos.length; i++) {
      //fonction createInputTask

      const inputTask = document.createElement("input");
      inputTask.id = "inputTaskList-"+ y +"inputTask-" + i;


      inputTask.addEventListener("change", (event) =>{
           updateTaskToList(y,i,event.target.value);
      })
    

      const deleteTask = document.createElement("button");
      deleteTask.className = "delete";
      deleteTask.id = "btnDeleteTaskList-"+y+"inputTask-"+i;

      deleteTask.addEventListener("click", () => { 
        deleteTaskToList(y);

      })
          /* listneer click 
       qui appelle deleteTaskToList(todolists[y], todolists[y].todos[i])
       displayLists(todos)
*/
      deleteTask.innerHTML = "X";
      inputTask.value = todolists[y].todos[i];

      const divIB = document.createElement("div");
      divIB.className = "divIB";

      divTask.appendChild(divIB);
      divIB.appendChild(inputTask);
      divIB.appendChild(deleteTask);

    }

    divList.appendChild(divNameList);
    divList.appendChild(divTask);

    divTask.appendChild(btnAddTask);
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
  displayLists(todos);

}

btnAjouter.addEventListener("click", addToDoList);


function addEmptyTaskToList(y) {
  todos[y].todos.push("");
   }

function updateTaskToList(y,i,newValue){
todos[y].todos[i] = newValue;
}


function deleteTaskToList(y,i){
todos[y].todos[i] = "";
displayLists(todos);
}





