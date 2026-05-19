const projectsData = [
  {
    id: 1,
    title: "Mountains",
    description: "Erste Html Seite, Visuelles Layout mit Berglandschaft.",
    longDescription:
      "Mein erstes reines HTML/CSS Projekt. Ich habe hier gelernt semantischen HTML-Code zu schreiben, mit CSS-Layouts (Flexbox) zu arbeiten und eine responsive Seite zu bauen.",
    tags: ["HTML", "CSS"],
    year: "2026",
    image: "assets/screenshots/mountains.png",
    link: "https://darkfire1003.github.io/Mountain/",
    gitlab:
      "https://gitlab.com/michael.kuscher/mountains/-/tree/12cc3f0a2e954cfb971e48dc24b4e088569e807d/",
    featured: true,
  },
  {
    id: 2,
    title: "Dark-Light Türsteher",
    description: "Namensliste mit Dark/Light-Mode Umschalter.",
    longDescription:
      "Mein erstes JavaScript DOM-Projekt. Ich habe Event Listener, classList.toggle() und den Dark/Light-Mode mit Tailwind CSS umgesetzt. Daten werden im localStorage gespeichert.",
    tags: ["JavaScript", "Tailwind CSS", "Dark Mode"],
    year: "2026",
    image: "assets/screenshots/firstJavascriptExpirience.png",
    link: "https://darkfire1003.github.io/First-Javascript-Project/src/",
    gitlab:
      "https://gitlab.com/michael.kuscher/dark-light/-/tree/b67b5b9dcb5f6f5d4c0970ecbf79b67305ff90b4/",
  },
  {
    id: 3,
    title: "First Challenge",
    description: "Erste Frontend-Challenge mit Layout-Aufgaben.",
    longDescription:
      "Meine erste gestellte Frontend-Challenge. Ich habe ein vorgegebenes Design mit HTML, Tailwind CSS und JavaScript nachgebaut und dabei komponentenbasiertes Denken geübt.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    year: "2026",
    image: "assets/screenshots/challengesNrOne.png",
    link: "https://darkfire1003.github.io/Challenge-Nr-1/src/",
    gitlab:
      "https://gitlab.com/michael.kuscher/first-challenge/-/tree/7a489d237c775c1c77339953146cdbdabe536548/",
  },
  {
    id: 4,
    title: "Shopping Cart",
    description: "Interaktiver Warenkorb mit localStorage.",
    longDescription:
      "Ein vollständiger Warenkorb: Produkte hinzufügen, Menge ändern, Gesamtpreis berechnen. Der Warenkorb bleibt nach dem Neuladen dank localStorage erhalten. Alles in Vanilla JS.",
    tags: ["JavaScript", "Tailwind CSS", "LocalStorage"],
    year: "2026",
    image: "assets/screenshots/ShoppingCart.png",
    link: "https://darkfire1003.github.io/Shopping-Cart/src/",
    gitlab:
      "https://gitlab.com/michael.kuscher/shopping-cart/-/tree/088d39d0c9cae37297b77f89bf31e0b507564954/",
  },
  {
    id: 5,
    title: "Brewery",
    description: "Brauerei-Übersicht mit Live-API.",
    longDescription:
      "Brauerei-Daten werden live über eine externe REST-API geladen (Open Brewery DB). Ich habe hier async/await, fetch() und dynamisches DOM-Rendering mit Tailwind CSS gelernt.",
    tags: ["JavaScript", "Tailwind CSS", "API Fetch"],
    year: "2026",
    image: "assets/screenshots/brewery.png",
    link: "https://darkfire1003.github.io/Brewery/src/",
    gitlab:
      "https://gitlab.com/michael.kuscher/brauerei-api/-/tree/eada2c2d052ef00d3841dc08e9960fdf306fd765/",
  },
  {
    id: 6,
    title: "DogWiki",
    description: "Hundelexikon mit zufälligen Fotos per API.",
    longDescription:
      "Zufällige Hundefotos und Fakten über die Dog API. Ich habe hier API-Fehlerbehandlung, Ladezustände (Spinner) und responsives Kartendesign mit Tailwind CSS umgesetzt.",
    tags: ["JavaScript", "Tailwind CSS", "API Fetch"],
    year: "2026",
    image: "assets/screenshots/dogWikiApi.png",

    link: "https://darkfire1003.github.io/DogWiki/src/",
    gitlab:
      "https://gitlab.com/michael.kuscher/dogwiki/-/tree/4639a126f55e4634408a00b234b3cab7fd42da48/",
  },
  {
    id: 7,
    title: "Rick & Morty",
    description: "Charakterübersicht mit der Rick & Morty API.",
    longDescription:
      "Charakterdaten aus dem Rick-and-Morty-Universum werden über die offizielle REST-API geladen und als durchsuchbare Kartenübersicht dargestellt. Filter nach Status und Spezies.",
    tags: ["JavaScript", "Tailwind CSS", "API Fetch"],
    year: "2026",
    image: "assets/screenshots/rickAndMorty.png",

    link: "https://darkfire1003.github.io/Rick-and-Morty/index.html",
    gitlab:
      "https://gitlab.com/michael.kuscher/rick-and-morty/-/tree/173ba96a0c1485bb1f7139b5dd714ee99b466c94/",
  },
  {
    id: 8,
    title: "DisneyWiki",
    description: "Disney-Charaktere mit Pagination.",
    longDescription:
      "Charakterübersicht mit der Disney API. Mein erstes Projekt mit Pagination — die Daten werden seitenweise geladen. Ich habe gelernt wie man Pagination-Logik in Vanilla JS baut.",
    tags: ["JavaScript", "Tailwind CSS", "API Fetch", "Pagination"],
    year: "2026",
    image: "assets/screenshots/disney.png",
    link: "https://darkfire1003.github.io/Disney/src",
    gitlab:
      "https://gitlab.com/michael.kuscher/disney/-/tree/7f1659917bfe399f2c8c19cbf0be0a21ac0804a2/",
  },
  {
    id: 9,
    title: "Weather App",
    description:
      "Moderne Wetter-App mit Forecast, Verlauf, Top 5 Suche und Strapi Backend.",
    longDescription:
      "Eine moderne Wetter-App mit Live-Wetterdaten über die WeatherAPI. Nutzer erhalten aktuelle Wetterdaten, 3-Tage Forecasts und astronomische Informationen wie Sonnenaufgang und Mondphase. Zusätzlich habe ich Suchverlauf, Top-5 Städte, localStorage und ein Strapi Backend zur Speicherung der Wetterdaten umgesetzt.",
    tags: [
      "JavaScript",
      "Tailwind CSS",
      "Weather API",
      "Strapi",
      "LocalStorage",
      "Responsive Design",
    ],
    year: "2026",
    image: "/assets/screenshots/weatherApp.png",

    link: "https://darkfire1003.github.io/Weather-App/src",
    gitlab: "https://gitlab.com/michael.kuscher/wetter-api",
    featured: true,
  },
];

const tools = [
  "VS Code",
  "Git",
  "GitLab",
  "Chrome DevTools",
  "Figma",
  "Netlify",
  "Github Pages",
  "LLM",
];

const skills = [
  { name: "HTML", pct: 85 },
  { name: "CSS", pct: 80 },
  { name: "Tailwind CSS", pct: 75 },
  { name: "JavaScript", pct: 65 },
  { name: "API Fetch", pct: 70 },
  { name: "GSAP", pct: 65 },
  { name: "LLM", pct: 45 },
];
