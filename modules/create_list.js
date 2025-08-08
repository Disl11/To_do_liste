export function createNewList(titleTask, area) {
  const newList = document.createElement("div");
  newList.className = "newList";

  const titleDiv = document.createElement("div");
  titleDiv.className = "titleDiv";

  const titleText = document.createElement("span");
  titleText.className = "titleText";
  titleText.textContent = titleTask;

  const btnGroup = document.createElement("div");
  btnGroup.className = "btnGroup";

  const btnEdit = document.createElement("span");
  btnEdit.className = "edit";
  btnEdit.textContent = "✏️";

  const btnDelete = document.createElement("span");
  btnDelete.className = "delete";
  btnDelete.textContent = "✖";

  const btnColor = document.createElement("span");
  btnColor.className = "color";
  btnColor.textContent = "🎨";

  btnGroup.appendChild(btnColor);
  btnGroup.appendChild(btnEdit);
  btnGroup.appendChild(btnDelete);

  titleDiv.appendChild(titleText);
  titleDiv.appendChild(btnGroup);

  const divText = document.createElement("div");
  divText.className = "divText";

  const text = document.createElement("textarea");
  text.className = "textarea";
  text.placeholder = "Écris tâche ici";

  const btnAddTache = document.createElement("button");
  btnAddTache.className = "addTache";
  btnAddTache.textContent = "Ajouter tâche";

  divText.appendChild(text);
  divText.appendChild(btnAddTache);

  newList.appendChild(titleDiv);
  newList.appendChild(divText);
  area.appendChild(newList);

  // =========  Event listener =======

  // bouton delete
  btnDelete.addEventListener("click", () => {
    area.removeChild(newList);
  });

  // bouton edit
  btnEdit.addEventListener("click", () => {
    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = titleText.textContent;
    inputEdit.className = "inputEdit";

    titleDiv.replaceChild(inputEdit, titleText);
    inputEdit.focus();

    inputEdit.addEventListener("keypress", (press) => {
      if (press.key === "Enter") {
        press.preventDefault();
        titleText.textContent = inputEdit.value;
        titleDiv.replaceChild(titleText, inputEdit);
      }
    });
  });

  // bouton add tache
  btnAddTache.addEventListener("click", () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.className = "textarea";
    newTextArea.placeholder = "Écris tâche ici";

    divText.insertBefore(newTextArea, btnAddTache);
  });
}
