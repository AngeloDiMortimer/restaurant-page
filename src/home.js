const createHome = () => {
    const home = document.createElement("div");
    home.classList.add("home");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");

    const imgPizza = document.createElement("img");
    imgPizza.src = "img/pizza_frontpage.jpg";
    imgPizza.alt = "Pizza";

    imgWrapper.appendChild(imgPizza);

    home.appendChild(createParagraph("Making the best pizza"));
    home.appendChild(createParagraph("Since 1997"));
    home.appendChild(imgWrapper);
    home.appendChild(createParagraph("Order online or visit us!"));

    return home;
}

const createParagraph = (text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

const loadHome = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;