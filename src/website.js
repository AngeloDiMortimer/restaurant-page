
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

/* adds "active" class to an element */
const setActive = (button) => {
    const buttons = document.querySelectorAll(".button-nav");
    
    buttons.forEach((button) =>{
        if (button !== this) {
            button.classList.remove("active");
        }
    })

    button.classList.add("active");
}

/* Initializes website */

const initWebsite = () => {

    const content = document.getElementById("content");

    content.appendChild(createHeader());

}

export default initWebsite;