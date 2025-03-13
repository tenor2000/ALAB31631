// import "./styles.css";

function app() {
  // Part 1: Getting Started from ALAB316.1.1

  const mainEl = document.querySelector("main");
  mainEl.style.backgroundColor = "var(--main-bg)";

  const headline = document.createElement("h1");
  headline.textContent = "DOM Manipulation";

  mainEl.appendChild(headline);

  mainEl.classList.add("flex-ctr");

  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");

  // Menu data structure UPDATED
  var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];

  menuLinks.forEach((menuLink) => {
    const alink = document.createElement("a");
    alink.setAttribute("href", menuLink.href);
    alink.textContent = menuLink.text;
    topMenuEl.appendChild(alink);
  });

  // Part 2: Adding Additional HTML and CSS

  // Completed in html and css file

  // Part 3: Creating the Submenu

  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");

  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = 0;

  // Part 4: Adding Menu Interaction

  const topMenuLinks = document.querySelectorAll("#top-menu a");

  // topMenuEl.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   if (!e.target.matches("a")) {
  //     return;
  //   }

  //   topMenuLinks.forEach((alink) => {
  //     if (alink !== e.target) {
  //       alink.classList.remove("active");
  //     }
  //   });

  //   e.target.classList.toggle("active");
  // });

  // Part 5: Adding Submenu Interaction

  topMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches("a")) {
      return;
    }

    e.target.classList.toggle("active");

    let activeSubLinks = [];

    for (let i = 0; i < menuLinks.length; i++) {
      if (topMenuLinks[i] !== e.target) {
        topMenuLinks[i].classList.remove("active");
      } else if (menuLinks[i].hasOwnProperty("subLinks")) {
        activeSubLinks = menuLinks[i].subLinks;
      } else {
        mainEl.firstChild.textContent = capitalize(e.target.textContent);
      }
    }

    subMenuEl.style.top =
      e.target.classList.contains("active") && activeSubLinks.length > 0
        ? "100%"
        : 0;

    buildSubmenu(activeSubLinks);
  });

  function buildSubmenu(subLinksArray) {
    while (subMenuEl.firstChild) {
      subMenuEl.removeChild(subMenuEl.firstChild);
    }

    subLinksArray.forEach((link) => {
      const alink = document.createElement("a");
      alink.href = link.href;
      alink.textContent = link.text;
      subMenuEl.appendChild(alink);
    });
  }

  subMenuEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.matches("a")) {
      return;
    }
    subMenuEl.style.top = 0;

    topMenuLinks.forEach((link) => {
      link.classList.remove("active");
    });

    mainEl.firstChild.textContent = capitalize(e.target.textContent);
  });

  function capitalize(string) {
    if (string.length < 1) {
      return false;
    }
    const arr = string.split(" ");
    let result = [];
    arr.forEach((word) => {
      result.push(word.slice(0, 1).toUpperCase() + word.slice(1));
    });
    return result.join(" ");
  }
}

app();
