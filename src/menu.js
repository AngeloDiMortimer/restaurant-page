
class Menu {
    
    constructor (name, ingredients) {

        this.name = name;
        this.ingredients = ingredients;
        
    }
}

const createMenu = () => {
    
    const menu = document.createElement("div");
    menu.classList.add("menu");
    /* Introduce your menu here */
    menu.appendChild(addMenuItem(
       "Salsiccia",
       "Tomato sauce, Mozarella, Tomato, Sausage, Garlic, Basil" 
    ));
    
    menu.appendChild(addMenuItem(
        "Gamberi",
        "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil" 
     ));
    
     menu.appendChild(addMenuItem(
        "Pepe",
        "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil" 
     ));
    
     menu.appendChild(addMenuItem(
        "Pomodoro",
        "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli" 
     ));
     

    return menu;
}


const addMenuItem = (name, ingredients) => {
    let menuItem = new Menu(name, ingredients);
    
    const menuDiv = document.createElement("div");
    const foodName = document.createElement("h2");
    const foodDesc = document.createElement("p");
    const imageWrapper= document.createElement("div");
    const foodImage = document.createElement("img");

    menuDiv.classList.add("menu-item");
    imageWrapper.classList.add("img-wrapper");

    foodName.textContent = menuItem.name;
    foodDesc.textContent = menuItem.ingredients;
    foodImage.src = `img/pizzas/${menuItem.name.toLowerCase()}.jpg`
    foodImage.alt = `${menuItem.name}`;

    imageWrapper.appendChild(foodImage);
    menuDiv.appendChild(imageWrapper);
    menuDiv.appendChild(foodName);
    menuDiv.appendChild(foodDesc);

    return menuDiv;
}



const loadMenu = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;