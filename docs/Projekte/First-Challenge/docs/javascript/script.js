/* Burgermenü */
function burger() {
  const btn = document.getElementById("burger");
  const nav = document.getElementById("navBar");
  btn.classList.toggle("is-active");
  nav.classList.toggle("hidden");
}
/* Popup auf und zu */
function popUp() {
  document.getElementById("popUp").classList.remove("hidden");
  document.getElementById("popUp").classList.add("flex");
}

function popDown() {
  document.getElementById("popUp").classList.add("hidden");
  document.getElementById("popUp").classList.remove("flex");
}

let rezepte = JSON.parse(localStorage.getItem("rezepte")) || RECIPES;

const favRezepte = document.getElementById("favGrid");
const alleRezepte = document.getElementById("allGrid");

/* speichern daten wenn nötig */

function speichernLocal() {
  localStorage.setItem("rezepte", JSON.stringify(rezepte));
}

/* id und comment hinzufügen */

rezepte = rezepte.map((recipe, index) => ({
  ...recipe,
  id: recipe.id ?? index + 1,
  comment: recipe.comment ?? [],
  rating: recipe.rating ?? 0,
}));

if (favRezepte && alleRezepte) {
  ladeRezepte(rezepte);
}
/* Rezeptkarte erstellen */
function rezeptKarte(recipe, isFavoriteView) {
  const commentBg = isFavoriteView ? "bg-secondary" : "bg-white";

  return `<div class="relative z-10 p-4 transition-transform ease-in-out shadow-lg shadow-black/60 rounded-2xl hover:scale-105 hover:duration-300">
            <div>
              <img
                src="${recipe.imageUrl}"
              onerror="this.onerror=null; this.src='assets/img/pizzaman.png';"
                class="object-cover w-full h-48 aspect-video"
              />
              <img
                class="absolute -translate-x-1/2 left-1/2 -top-3 h-13"
                src="assets/gfx/star.svg"
                alt="star logo"
              />
            </div>
            <div class="hearts">
            <span class="heart ${recipe.rating >= 1 ? `aktiv` : ""}" onclick="bewertung(${recipe.id},1)"  data-value="1">❤</span>
            <span class="heart ${recipe.rating >= 2 ? `aktiv` : ""}" onclick="bewertung(${recipe.id},2)" data-value="2">❤</span>
            <span class="heart ${recipe.rating >= 3 ? `aktiv` : ""}" onclick="bewertung(${recipe.id},3)" data-value="3">❤</span>
            <span class="heart ${recipe.rating >= 4 ? `aktiv` : ""}" onclick="bewertung(${recipe.id},4)" data-value="4">❤</span>
            <span class="heart ${recipe.rating >= 5 ? `aktiv` : ""}" onclick="bewertung(${recipe.id},5)" data-value="5">❤</span>
            
           
            </div> 
            <div>
              <p class="pt-2 text-xs text-gray-500">${recipe.dishCategory}/${recipe.category}/${recipe.cookingTime}</p>
            
              <h3 class="font-bold border-t-2 text-md border-primary/20">
                ${recipe.name}
              </h3>

              <p class="text-sm text-gray-600">
                ${recipe.description}
              </p>
                </div>
                
                <div class="mt-2 ">
                <p class="${commentBg} w-fit relative z-5 left-5 px-2 text-xs font-bold -bottom-4">Comments</p>
                <ul id="commOut-${recipe.id}" class="relative p-2 mt-2 text-sm text-left border-t-2 rounded-xl text-primary">
                ${(recipe.comment || []).map((c) => `<li>- ${c}</li>`).join("")}
                </ul>
                <div class="flex flex-col items-center justify-between mx-auto input lg:flex-row">
                  <input type="text" name="comment" id="commentIn-${recipe.id}" placeholder="Place Your Comment" class="text-black! rounded-xl text-center bg-white "></input>
                  <button onclick="comment(${recipe.id})" class="w-full border-black lg:pl-2">Send</button>
                </div>
                </div>
          
          </div>
  `;
}

/* laden/aktualisieren */

function ladeRezepte(rezepte) {
  const favCard = rezepte.filter((r) => r.isFavorite);
  const allCard = rezepte.filter((r) => !r.isFavorite);

  favRezepte.innerHTML = favCard.map((r) => rezeptKarte(r, true)).join("");
  alleRezepte.innerHTML = allCard.map((r) => rezeptKarte(r, false)).join("");
}

/* rezept hinzufügen */
function rezeptNeu() {
  const rezept = {
    id: Date.now(),
    name: document.getElementById("name").value.trim(),
    description: document.getElementById("description").value.trim(),
    imageUrl: document.getElementById("imageUrl").value.trim(),
    category: document.getElementById("category").value.trim(),
    dishCategory: document.getElementById("dishCategory").value.trim(),
    isFavorite: document.getElementById("isFavorite").checked,
    author: document.getElementById("author").value.trim(),
    cookingTime: document.getElementById("cookingTime").value.trim(),
    comment: [],
    rating: document.getElementById("isFavorite").checked ? 5 : 0,
  };

  if (
    !rezept.name ||
    !rezept.description ||
    !rezept.author ||
    !String(rezept.cookingTime).trim()
  )
    return alert("Bitte Felder ausfüllen");
  rezepte.push(rezept);
  speichernLocal();
  if (favRezepte && alleRezepte) {
    ladeRezepte(rezepte);
  }
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("imageUrl").value = "";
  document.getElementById("author").value = "";
  document.getElementById("cookingTime").value = "";
  document.getElementById("isFavorite").checked = false;
  popDown();
}

/* filter funktion */
function filter() {
  const mahlLand = document.getElementById("land")?.value || "";
  const mahlKategorie = document.getElementById("meal")?.value || "";

  let gefiltert = rezepte;
  if (mahlLand) {
    gefiltert = gefiltert.filter((f) => f.dishCategory === mahlLand);
  }
  if (mahlKategorie) {
    gefiltert = gefiltert.filter((f) => f.category === mahlKategorie);
  }

  if (favRezepte && alleRezepte) {
    ladeRezepte(gefiltert);
  }
}
/* Kommentar */

function comment(id) {
  const rezept = rezepte.find((r) => r.id === id);
  if (!rezept) return;
  const input = document.getElementById(`commentIn-${id}`);
  if (!input) return;
  const commentInput = input.value.trim();

  if (!commentInput) {
    alert("Bitte Kommentar eingeben!");
    return;
  }
  rezept.comment.push(commentInput);
  input.value = "";
  speichernLocal();
  if (favRezepte && alleRezepte) {
    ladeRezepte(rezepte);
  }
}

/* Berwertungs Herzen */

function bewertung(id, value) {
  const rezept = rezepte.find((r) => r.id === id);

  if (rezept) {
    rezept.rating = rezept.rating === value ? 0 : value;
    rezept.isFavorite = rezept.rating === 5;

    speichernLocal();
    if (favRezepte && alleRezepte) {
      ladeRezepte(rezepte);
    }
  }
}
