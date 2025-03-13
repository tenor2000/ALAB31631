// import "./styles.css";

// Part 1: Getting Started

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

const headline = document.createElement("h1");
headline.textContent = "DOM Manipulation";

mainEl.appendChild(headline);

mainEl.classList.add("flex-ctr");

// Part 2: Creating a Menu Bar

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// // Part 3: Adding Menu Buttons

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach((menuLink) => {
  const alink = document.createElement("a");
  alink.setAttribute("href", menuLink.href);
  alink.textContent = menuLink.text;
  topMenuEl.appendChild(alink);
});

// Part 4: Adding Interactivity

// to be continued...
