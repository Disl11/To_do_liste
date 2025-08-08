const STORAGE_KEY = "todoLists";

// ========= Récupère les données depuis le localStorage ======
export function getLists() {
  const data = localStorage.getItem(STORAGE_KEY);
  //si data a rien return la list vide
  if (data === null) {
    return [];
  }
  return JSON.parse(data);
}

// ======= Sauvegarde des données modifer ========
export function saveLists(lists) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
}

// =======  Nouvelle fonction : lit les listes depuis le DOM et les sauvegarde =======
export function saveAllListsFromDOM() {
  const lists = [];
  const allLists = document.querySelectorAll(".newList");

  for (let i = 0; i < allLists.length; i++) {
    const list = allLists[i];

    // Recherche des éléments, en testant leur existencee
    const titleElement = list.querySelector(".titleText");
    let titre = "Sans titre";
    if (titleElement && titleElement.textContent) {
      titre = titleElement.textContent;
    }

    const textAreaElement = list.querySelector(".textarea");
    let contenu = "";
    if (textAreaElement && textAreaElement.value) {
      contenu = textAreaElement.value;
    }

    lists.push({ titre, contenu });
  }

  saveLists(lists);
}
