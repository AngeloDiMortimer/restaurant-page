/* Creates Header */
const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");

    const restName = document.createElement("h1");
    restName.classList.add("rest-name");
    restName.textContent = "Di Mortimer";

    header.appendChild(restName);
    header.appendChild(createNav());

    return header;
}

const createNav = () => {
    const nav = document.createElement("nav");
    
    /* Home Button */
    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(homeButton);
    });

    /* Menu Button */
    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(menuButton);
    });
    
    /* Contact Button */
    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(contactButton);
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
    
}

/* adds "active" class to a button-nav element */
const setActive = (button) => {
    const buttons = document.querySelectorAll(".button-nav");
    
    buttons.forEach((button) =>{
        if (button !== this) {
            button.classList.remove("active");
        }
    })
    
    button.classList.add("active");
}

/* Creates main */

const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

/* Creates Footer */

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    
    const para = document.createElement("p");
    para.textContent = `Angelo Martínez \u00A9 ${new Date().getFullYear()}`;

    footer.appendChild(para);

    return footer;
}

/* Initializes website */

const initWebsite = () => {

    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

}

export default initWebsite;