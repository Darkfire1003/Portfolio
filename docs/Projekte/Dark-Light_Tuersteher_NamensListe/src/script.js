// =======================
// THEME (Light / Dark)
// =======================
function setTheme(bg, color) {
	document.body.style.backgroundColor = bg;
	document.body.style.color = color;
}

function light() {
	setTheme("gray", "darkgray");
}

function dark() {
	setTheme("black", "gray");
}

// =======================
// FONT SIZE (alle h1)
// =======================
function setFontSizeAll(size) {
	document.querySelectorAll("h1").forEach((h1) => {
		h1.style.fontSize = size;
	});
}

function small() {
	setFontSizeAll("1rem");
}

function big() {
	setFontSizeAll("3rem");
}

// =======================
// RESET (alles zurücksetzen)
// =======================
function reset() {
	document.body.removeAttribute("style");

	document.querySelectorAll("h1").forEach((h1) => {
		h1.removeAttribute("style");
	});

	document.getElementById("output").textContent = "";
	document.getElementById("age").value = "";
	document.getElementById("firstName").value = "";
}

// =======================
// CHECK (Türsteher Logik)
// =======================
function check() {
	const ageValue = document.getElementById("age").value;
	const nameValue = document.getElementById("firstName").value;
	const output = document.getElementById("output");

	if (ageValue === "" || nameValue === "") {
		output.textContent = "Bitte gib Alter und Vorname ein!";
		return;
	}

	const age = Number(ageValue);
	const name = nameValue.trim().toLowerCase();

	if (name === "admin" && age >= 18) {
		output.textContent = "Willkommen Admin! Kostenloser Zutritt";
	} else if (age < 18) {
		output.textContent = "Du bist zu jung. Kein Zutritt!!!";
	} else {
		output.textContent = "Du darfst rein, bitte zahle 10€";
	}
}

// =======================
//     TO DO Liste
// =======================

/* Vorgelegete Einträge */

const toDo = ["Trainieren", "Lernen", "Schlafen", "Repeat"];
removeElement();

/* Der Liste hinzufügen (.pusch) */
function addTo() {
	const addList = document.getElementById("inputList").value;
	toDo.push(addList);
	renderList();
}

/* Liste Aktualisieren + entfernen Button (.join"" wichtig zwischenraum angabe) */
function renderList() {
	const listItems = toDo
		.map(
			(item, index) =>
				`<li>${item} <button onclick="removeElement(${index})">X</button></li>`,
		)
		.join("");

	document.getElementById("listItems").innerHTML = listItems;
}

/* Löschbefehl (1 wichtig das nur eine entfernt wird) */
function removeElement(index) {
	toDo.splice(index, 1);
	renderList();
}

// =======================
//     BMI Rechner
// =======================
let aufzeichnung = [];

/* Beziehen der Daten */
function bmiRechner() {
	let groesse = Number(document.getElementById("inputGroesse").value);
	let gewicht = Number(document.getElementById("inputGewicht").value);

	/* Umrechnen Größe */

	let groesseM = groesse / 100;
	let bmi = gewicht / (groesseM * groesseM);

	/* auf 2 Nachkommastellen runden */
	const bmiGerundet = parseFloat(bmi.toFixed(2));
	const kategorie = klasse(bmiGerundet);

	/* Ausgabe */
	const ergebnisText = `Ihr BMI ist: ${bmiGerundet}<br>${kategorie}`;
	document.getElementById("ergebnis").innerHTML = ergebnisText;
	aufzeichnung.push(`BMI: ${bmiGerundet} (${kategorie})`);

	document.getElementById("historie").innerHTML = aufzeichnung.join("<br>");
}

/* IF Kategorisierung */
function klasse(bmiGerundet) {
	if (bmiGerundet < 18.5) {
		document.getElementById("ergebnis").style.backgroundColor = "red";
		return "Untergewichtig";
	} else if (bmiGerundet >= 18.5 && bmiGerundet <= 24.9) {
		document.getElementById("ergebnis").style.backgroundColor = "green";
		return "Normalgewichtig";
	} else if (bmiGerundet >= 25 && bmiGerundet <= 29.9) {
		document.getElementById("ergebnis").style.backgroundColor = "orange";
		return "Übergewichtig";
	} else if (bmiGerundet >= 30 && bmiGerundet <= 34.9) {
		document.getElementById("ergebnis").style.backgroundColor = "red";
		return "Adipositas Grad I";
	}

	return "unbekannt";
}

// =======================
//     Namens Liste
// =======================

let persons = JSON.parse(localStorage.getItem("persons")) || [];
render();

/* Hinzufügen */
function addPerson() {
	const nameInput = document.getElementById("nameInput");
	const ageInput = document.getElementById("ageInput");

	const name = nameInput.value;
	const age = parseInt(ageInput.value);

	/* Klare aangabe */
	if (!name || name.length < 2) {
		alert("Name muss mindestens 2 Zeichen haben!");
		nameInput.focus();
		return;
	}
	if (isNaN(age) || age < 1 || age > 150) {
		alert("Alter muss eine Zahl zwischen 1 und 150 sein!");
		ageInput.focus();
		return;
	}
	persons.push({ name, age });
	saveToStorage();
	clearInputs();
	render();
}

function deletePerson() {
	const name = document.getElementById("nameInput").value.trim().toLowerCase();
	const ageValue = document.getElementById("ageInput").value.trim();

	if (!name) {
		alert("Name eingeben!");
		return;
	}

	const beforeCount = persons.length;

	/* Löschen der Personen */

	/* FALL 1: Alter angegeben → gezielt löschen */
	if (ageValue !== "") {
		const age = parseInt(ageValue);

		if (isNaN(age)) {
			alert("Alter ungültig!");
			return;
		}

		persons = persons.filter(
			(p) => !(p.name.toLowerCase() === name && p.age === age),
		);
	} else {
		/* FALL 2: kein Alter → alle Namen löschen */
		persons = persons.filter((p) => p.name.toLowerCase() !== name);
	}

	// ❗ nichts gefunden
	if (persons.length === beforeCount) {
		alert("Kein passender Eintrag gefunden!");
		return;
	}

	saveToStorage();
	clearInputs();
	render();
}

/* Liste rendern*/

function render() {
	const list = document.getElementById("addList");
	list.innerHTML = "";

	persons.forEach((p) => {
		const li = document.createElement("li");
		li.className = "py-2 border-b last:border-b-0";
		li.textContent = `${p.name}, ${p.age} Jahre`;
		list.appendChild(li);
	});
}

/* LocalStorage speichern */
function saveToStorage() {
	localStorage.setItem("persons", JSON.stringify(persons));
}

/*  */ /* Inputs leeren */
function clearInputs() {
	document.getElementById("nameInput").value = "";
	document.getElementById("ageInput").value = "";
}
