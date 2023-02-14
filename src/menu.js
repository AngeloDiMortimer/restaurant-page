
class Menu {
    
    constructor (name, ingredients) {

        this.name = name;
        this.ingredients = ingredients;
        
    }
}

const createMenu = () => {
    
    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    menu.appendChild(addMenuItem(
       "Salsiccia",
       "Tomato sauce, Mozarella, Tomato, Sausage, Garlic, Basil" 
    ));
    
    menu.appendChild(addMenuItem(
        "Salsiccia",
        "Tomato sauce, Mozarella, Tomato, Sausage, Garlic, Basil" 
     ));
    
    
    return menu;
}


const addMenuItem = (name, ingredients) => {
    let menuItem = new Menu(name, ingredients);
    
    const menuDiv = document.createElement("div");
    const foodName = document.createElement("h2");
    const foodDesc = document.createElement("p");
    const foodImage = document.createElement("img");

    menuDiv.classList.add("menu-item");

    foodName.textContent = menuItem.name;
    foodDesc.textContent = menuItem.ingredients;
    foodImage.src = 
    foodImage.alt = `${menuItem.name}`;


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