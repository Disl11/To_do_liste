import { getLists, saveAllListsFromDOM } from "./local_storage.js";

// Fonction utilitaire pour créer une liste dans le DOM (utilisée au chargement ET à l'ajout)
function createListInDOM(titre) {
    const area = document.querySelector("#area");

    const newList = document.createElement("div");
    newList.className = "newList";

    // Titre + boutons
    const titleDiv = document.createElement("div");
    titleDiv.className = "titleDiv";

    const titleText = document.createElement("span");
    titleText.className = "titleText";
    titleText.textContent = titre;

    const btnGroup = document.createElement("div");
    btnGroup.className = "btnGroup";

    const btnEdit = document.createElement("button");
    btnEdit.className = "edit";
    btnEdit.textContent = "✏️";

    const btnDelete = document.createElement("button");
    btnDelete.className = "delete";
    btnDelete.textContent = "✖";

    btnGroup.appendChild(btnEdit);
    btnGroup.appendChild(btnDelete);
    titleDiv.appendChild(titleText);
    titleDiv.appendChild(btnGroup);

    // Zone de texte
    const divText = document.createElement("div");
    divText.className = "divText";

    let text = document.createElement("textarea");
    text.className = "textarea";
    text.placeholder = " Ecris ta tâche ici ";
    text.rows = 10;
    text.cols = 30;
    divText.appendChild(text);

    // Assemblage
    newList.appendChild(titleDiv);
    newList.appendChild(divText);
    area.appendChild(newList);

    // Suppression
    btnDelete.addEventListener("click", function () {
        area.removeChild(newList);
        saveAllListsFromDOM();
    });

    // Edition du titre
    btnEdit.addEventListener("click", function () {
        const inputEdit = document.createElement("input");
        inputEdit.value = titleText.textContent;
        inputEdit.className = "inputEdit";
        titleDiv.replaceChild(inputEdit, titleText);
        inputEdit.focus();

        inputEdit.addEventListener("blur", function () {
            const newTitle = inputEdit.value || "Sans titre";
            titleText.textContent = newTitle;
            titleDiv.replaceChild(titleText, inputEdit);
            saveAllListsFromDOM();
        });
        inputEdit.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                inputEdit.blur();
            }
        });
    });

    // Sauvegarde à chaque modification du textarea
    text.addEventListener("input", function () {
        saveAllListsFromDOM();
    });
}

export function add_list() {
    
    const btnAjouter = document.querySelector(".ajouter");
    const input = document.querySelector(".input");

    // Affiche les listes sauvegardées au chargement
    const savedLists = getLists();
    savedLists.forEach(({ titre, contenu }) => {
        createListInDOM(titre, contenu);
    });

    // Ajout d'une nouvelle liste
    btnAjouter.addEventListener("click", function () {
        const titleTask = input.value;
        if (titleTask === "") {
            return;
        }
        createListInDOM(titleTask, "");
        input.value = "";

        saveAllListsFromDOM();
    });

    // Ajout avec la touche Entrée
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            btnAjouter.click();
        }
    });
}