
const btnAjouter = document.querySelector(".ajouter");
const input = document.querySelector(".input");
const area = document.querySelector("#area");

btnAjouter.addEventListener("click", function () {
    // conditon si rien dans l'input de pas ajouter retourne rien

    const titleTask = input.value
    if (titleTask === "") {
        return;
    }

    // creation d'une nouvelle liste 
    const newList = document.createElement("div")
    newList.className = "newList"


    //   création de la div Titre de la tâche
    const titleDiv = document.createElement("div");
    titleDiv.className = "titleDiv";
    titleDiv.textContent = titleTask;

    // Création du boutton suprimé la liste
    let btnDelete = document.createElement("span")
    btnDelete.className = "delete";
    btnDelete.textContent = "✖";

    //création éditer le titre de la liste
    let btnEdit = document.createElement("span")
    btnEdit.className = "edit";
    btnEdit.textContent = "✏️";

    titleDiv.appendChild(btnEdit);
    titleDiv.appendChild(btnDelete);

    const divText = document.createElement("div");
    divText.className = "divText"

    //Création de tu text area pour la taches 
    let text = document.createElement("textarea")
    text.className = "textarea"
    text.placeholder = " Ecris ta tâche ici "
    text.row = 10;
    text.cols = 30;

    divText.appendChild(text);

    // Assemblage
    newList.appendChild(titleDiv);
    newList.appendChild(divText);
    area.appendChild(newList);

    btnDelete.addEventListener("click", function () {
        area.removeChild(newList);

    })

    btnEdit.addEventListener("click", function () {
        newList.contentEditable = true;
        newList.focus();

    })

    input.value = "";
})