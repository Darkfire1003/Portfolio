const projectsData = [
  {
    id: 1,
    title: "Mountains",
    description: "Erste Html Seite, Visuelles Layout mit Berglandschaft.",
    longDescription:
      "Mein erstes reines HTML/CSS Projekt. Ich habe hier gelernt semantischen HTML-Code zu schreiben, mit CSS-Layouts (Flexbox) zu arbeiten und eine responsive Seite zu bauen.",
    tags: ["HTML", "CSS"],
    year: "2025",
    image: "assets/screenshots/mountains.png",
    link: "https://darkfire1003.github.io/Mountain/",
    github: "https://github.com/Darkfire1003/Mountain",
    featured: true,
  },
  {
    id: 2,
    title: "Dark-Light Türsteher",
    description: "Namensliste mit Dark/Light-Mode Umschalter.",
    longDescription:
      "Mein erstes JavaScript DOM-Projekt. Ich habe Event Listener, classList.toggle() und den Dark/Light-Mode mit Tailwind CSS umgesetzt. Daten werden im localStorage gespeichert.",
    tags: ["JavaScript", "Tailwind CSS", "Dark Mode"],
    year: "2025",
    image: "assets/screenshots/firstJavascriptExpirience.png",
    link: "https://darkfire1003.github.io/First-Javascript-Project/src/",
    github: "https://github.com/Darkfire1003/First-Javascript-Project",
  },
  {
    id: 3,
    title: "First Challenge",
    description: "Erste Frontend-Challenge mit Layout-Aufgaben.",
    longDescription:
      "Meine erste gestellte Frontend-Challenge. Ich habe ein vorgegebenes Design mit HTML, Tailwind CSS und JavaScript nachgebaut und dabei komponentenbasiertes Denken geübt.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    year: "2025",
    image: "assets/screenshots/challengesNrOne.png",
    link: "https://darkfire1003.github.io/Challenge-Nr-1/src/",
    github: "https://github.com/Darkfire1003/Challenge-Nr-1",
  },
  {
    id: 4,
    title: "Shopping Cart",
    description: "Interaktiver Warenkorb mit localStorage.",
    longDescription:
      "Ein vollständiger Warenkorb: Produkte hinzufügen, Menge ändern, Gesamtpreis berechnen. Der Warenkorb bleibt nach dem Neuladen dank localStorage erhalten. Alles in Vanilla JS.",
    tags: ["JavaScript", "Tailwind CSS", "LocalStorage"],
    year: "2025",
    image: "assets/screenshots/ShoppingCart.png",
    link: "https://darkfire1003.github.io/Shopping-Cart/src/",
    github: "https://github.com/Darkfire1003/Shopping-Cart",
  },
  {
    id: 5,
    title: "Brewery",
    description: "Brauerei-Übersicht mit Live-API.",
    longDescription:
      "Brauerei-Daten werden live über eine externe REST-API geladen (Open Brewery DB). Ich habe hier async/await, fetch() und dynamisches DOM-Rendering mit Tailwind CSS gelernt.",
    tags: ["JavaScript", "Tailwind CSS", "API Fetch"],
    year: "2025",
    image: "assets/screenshots/brewery.png",
    link: "https://darkfire1003.github.io/Brewery/src/",
    github: "https://github.com/Darkfire1003/Brewery",
  },
  {
    id: 6,
    title: "DogWiki",
    description: "Hundelexikon mit zufälligen Fotos per API.",
    longDescription:
      "Zufällige Hundefotos und Fakten über die Dog API. Ich habe hier API-Fehlerbehandlung, Ladezustände (Spinner) und responsives Kartendesign mit Tailwind CSS umgesetzt.",
    tags: ["JavaScript", "Tailwind CSS", "API Fetch"],
    year: "2025",
    image: "assets/screenshots/dogWikiApi.png",

    link: "https://darkfire1003.github.io/DogWiki/src/",
    github: "https://github.com/Darkfire1003/DogWiki",
  },
  {
    id: 7,
    title: "Rick & Morty",
    description: "Charakterübersicht mit der Rick & Morty API.",
    longDescription:
      "Charakterdaten aus dem Rick-and-Morty-Universum werden über die offizielle REST-API geladen und als durchsuchbare Kartenübersicht dargestellt. Filter nach Status und Spezies.",
    tags: ["JavaScript", "Tailwind CSS", "API Fetch"],
    year: "2025",
    image: "assets/screenshots/rickAndMorty.png",

    link: "https://darkfire1003.github.io/Rick-and-Morty/index.html",
    github: "https://github.com/Darkfire1003/Rick-and-Morty",
  },
  {
    id: 8,
    title: "DisneyWiki",
    description: "Disney-Charaktere mit Pagination.",
    longDescription:
      "Charakterübersicht mit der Disney API. Mein erstes Projekt mit Pagination — die Daten werden seitenweise geladen. Ich habe gelernt wie man Pagination-Logik in Vanilla JS baut.",
    tags: ["JavaScript", "Tailwind CSS", "API Fetch", "Pagination"],
    year: "2025",
    image: "assets/screenshots/disney.png",
    link: "https://darkfire1003.github.io/Disney/src",
    github: "https://github.com/Darkfire1003/Disney",
  },
];

const tools = [
  "VS Code",
  "Git",
  "GitHub",
  "Chrome DevTools",
  "Figma",
  "Netlify",
  "GitHub Pages",
];

const skills = [
  { name: "HTML", pct: 85 },
  { name: "CSS", pct: 80 },
  { name: "Tailwind CSS", pct: 75 },
  { name: "JavaScript", pct: 65 },
  { name: "API Fetch", pct: 70 },
  { name: "GSAP", pct: 65 },
];
