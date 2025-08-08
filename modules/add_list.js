// //
function displayLists() {
  var todolist = { name: "ma todo", todos: ["abc", "azerty"] };
  const titleTask = inputList.value;
  if (titleTask === "") return;

  const area = document.querySelector(".area");
  const divList = document.createElement("div");
  divList.id = "list";
  const divNameList = document.createElement("div");
  divNameList.className = "title-liste";
  const h3NameList = document.createElement("h3");
  titleCreatList.id = "h3NameList";
  const inputNameList = document.createElement("input");
  inputNameList.id = "inputNameList";
  inputList.textContent = todolist.name;

  h3NameList.appendChild(inputList);

  divNameList.appendChild(h3NameList);

  divList.appendChild(divNameList);

  // titleCreatList.className = "titleList";
  // titleCreatList.textContent = todolist.name;
  // const btnEdit = document.createElement("boutton");
  // btnEdit.className = "btnEdit";

  // const btnDeleteListe = document.createElement("button");
  // btnDeleteListe.className = "deleteListe";

  // <div class="create-list" id="create-list1">
  //     <div class="title-liste">
  //         <h3><input placeholder="Saisie titre"></h3>
  //         <div class="regroup-btn">
  //             <button class="edit">✏️</button>
  //             <button class="delete"></button>
  //         </div>
  //     </div>
  //     <div class="liste-tache" id="liste-tache1">
  //         <ul>
  //             <li><input placeholder="toto" /><button>✖</button></li>
  //             <li><input placeholder="toto" /><button>✖</button></li>
  //         </ul>
  //         <button class="btn-tache">Ajouter tache</button>
  //     </div>
  // </div>

  // const inputTask = document.createElement("li button");
  // inputTask.className = "inputTask";

  // const btnDeleteTask = document.createElement("button");
  // btnDeleteTask.className = "deleteTask";

  area.appendChild(divList);
}
//}

// btnAjouter.addEventListener("click", displayLists);
window.addEventListener("load", displayLists);
