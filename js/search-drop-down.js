"use strict";

const input = document.getElementById("search-input");
const dropdown = document.getElementById("search-drop-results");

//show dropdown list
/* input.addEventListener("focus", () => {
    dropdown.classList.add("show-results");
});

//hide dropdown list
input.addEventListener("focusout", () => {
    dropdown.classList.remove("show-results");
}) */

const resultsList = document.getElementById("search-drop-results");

//array with objects of destinations -> JSON
const destinations = [
    {
        location: "London",
        image: "./images/destinations/ldn.jpg",
        days: 4,
        price: 450
    },
    {
        location: "Amsterdam",
        image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        days: 5,
        price: 550
    },
    {
        location: "New-York",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        days: 10,
        price: 1050
    },
];

//check key for dest location name
input.addEventListener("input",(event) => {
    const key = event.target.value;
    console.log(key);
    for (const dest of destinations) {
        let match = true;
        for (let i=0; i<key.length; i++) {
            if (key[i] !== dest.location[i]) {
                match = false;
                break;
            }
        }
        /* if (match) console.log(`MATCH ${dest.location}`); */
        if (match && !checkDoubleLi(dest) && key!="")  dropdown.appendChild(createLiResult(dest));
    }
});



const createLiResult = (dest) => {
    const {location,image,days,price} = dest; //decunstructing object in variables

    let li = document.createElement("li");
    li.classList.add("dropdown-li",`${location}`);
    
    let link = document.createElement("a");
    link.href = `destinations.html#${location}`;
    li.appendChild(link);

    let img = document.createElement("img");
    img.src = image;
    img.alt = location;
    link.appendChild(img);

    let lcnt = document.createElement("span");
    lcnt.innerText = location;
    link.appendChild(lcnt);

    let ds = document.createElement("span");
    ds.innerText = `${days} days`;
    link.appendChild(ds);

    let prc = document.createElement("span");
    prc.innerText = `${price} £`;
    link.appendChild(prc);

    console.log(li);
    return li;
}

const checkDoubleLi = (dest) => {
    for (const li of resultsList.children) {
        if (li.classList.contains(`${dest.location}`)) return true;
    }
    return false;
}