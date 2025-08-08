import { createNewList } from "./create_list.js";

export function add_list() {
  const btnAjouter = document.querySelector(".ajouter");
  const input = document.querySelector(".input");
  const area = document.querySelector("#area");

  function ajouterListe() {
    const titleTask = input.value;
    if (titleTask === "") return;

    createNewList(titleTask, area);
    input.value = "";
  }

  btnAjouter.addEventListener("click", ajouterListe);

  input.addEventListener("keydown", (press) => {
    if (press.key === "Enter") {
      press.preventDefault();
      ajouterListe();
    }
  });
}
