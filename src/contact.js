const createHeader = () => {
    const contact = document.createElement("div");
    const phoneNum = document.createElement("p");
    const address = document.createElement("p");
    const dummyMap = document.createElement("img");

    contact.classList.add("contact");

    phoneNum.textContent = "📞 123 456 789";
    address.textContent = "🏠 Dummy Adress Boulevard 51, Los Angeles, USA";

    dummyMap.src = "img/fake_googlemaps.webp";
    dummyMap.alt = "Restaurant Location";

    contact.appendChild(phoneNum);
    contact.appendChild(address);
    contact.appendChild(dummyMap);
    
    return contact;
}





const loadContact = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHeader());
    console.log("loads!");
}

export default loadContact;