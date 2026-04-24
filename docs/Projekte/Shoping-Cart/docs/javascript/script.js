const produkte = [
  {
    index: 1,
    name: "Kaffeemaschine",
    imageUrl: "assets/png/pngimg.com - coffee_machine_PNG102211.png",
    preis: 300,
  },
  {
    index: 2,
    name: "Gamepad",
    imageUrl: "assets/png/pngimg.com - gamepad_PNG91.png",
    preis: 50,
  },
  {
    index: 3,
    name: "Roboter",
    imageUrl: "assets/png/pngimg.com - robot_PNG102.png",
    preis: 3000,
  },
  {
    index: 4,
    name: "Mystery Box",
    imageUrl: "assets/png/pngimg.com - treasure_chest_PNG154.png",
    preis: 999,
  },
];

let warenkorb = JSON.parse(localStorage.getItem("warenkorb")) || [];

const container = document.getElementById("alleProdukte");

function produktCard(produkte) {
  return `<div class="flex flex-col items-center justify-center  ml-5 pb-5 mx-5 shadow-2xl mb-5 rounded-3xl">
            <p class="mb-2 pt-3 font-bold">${produkte.name}</p>
            <img class="h-20 mb-2 aspect-square" src="${produkte.imageUrl}"width="80" height="80" loading="lazy" />
            <p class="mb-2">Preis: € ${produkte.preis}</p>
            <button data-id="${produkte.index}" onclick="zumWarenkorb(this)" class="border w-3/4 rounded-2xl px-3 bg-amber-400" type="button">
              Zum Warenkorb hinzufügen
            </button>
          </div>`;
}

produkte.forEach((produkte) => {
  container.innerHTML += produktCard(produkte);
});

function zumWarenkorb(btn) {
  const id = parseInt(btn.dataset.id);
  const produkt = produkte.find((p) => p.index === id);
  const vorhandenesItem = warenkorb.find((item) => item.index === id);

  if (vorhandenesItem) {
    vorhandenesItem.menge += 1;
  } else {
    warenkorb.push({ ...produkt, menge: 1 });
  }
  speichernUndRendern();
}

function entfernen(id) {
  warenkorb = warenkorb.filter((item) => item.index !== id);
  speichernUndRendern();
}
function mengeAendern(id, menge) {
  const item = warenkorb.find((item) => item.index === id);
  item.menge = parseInt(menge);
  speichernUndRendern();
}

function warenkorbRendern() {
  const liste = document.getElementById("warenkorbListe");
  const gesamtpreis = document.getElementById("gesamtpreis");

  if (warenkorb.length === 0) {
    liste.innerHTML = `<p class="text-gray-400">Keine Produkte im Warenkorb.</p>`;
    gesamtpreis.textContent = "Gesamt: € 0";
    return;
  }

  liste.innerHTML = warenkorb
    .map(
      (item) => `
    <div class="grid grid-cols-4  items-center justify-even mb-3 border-b pb-2">
      <span class="font-medium">${item.name}</span>
      <select onchange="mengeAendern(${item.index}, this.value)" class="border rounded px-1 mx-2">
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9999].map((n) => `<option value="${n}" ${item.menge === n ? "selected" : ""}>${n}</option>`).join("")}
      </select>
      <span>€ ${item.preis * item.menge}</span>
      <button onclick="entfernen(${item.index})" class="ml-2 text-red-500 font-bold">✕</button>
    </div>
  `,
    )
    .join("");

  const gesamt = warenkorb.reduce(
    (sum, item) => sum + item.preis * item.menge,
    0,
  );
  gesamtpreis.textContent = `Gesamt: € ${gesamt}`;
}

function speichernUndRendern() {
  localStorage.setItem("warenkorb", JSON.stringify(warenkorb));
  warenkorbRendern();
}

warenkorbRendern();
