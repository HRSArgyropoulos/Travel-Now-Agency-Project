"use strict";

const input = document.getElementById("search-input");
const dropdown = document.getElementById("search-drop-results");
const resultsList = document.getElementById("search-drop-results");

//array with objects of destinations -> JSON
window.addEventListener('DOMContentLoaded', () => {
    fetch('./destinations-data.json')
        .then(response => response.json())
        .then(json => search(json));
});


//check key for dest location name
function search(destinations) {
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
            if (match && !destExists(dest) && key!="" && dropdown.childElementCount<3)  dropdown.appendChild(createLiResult(dest));
            if (!match && destExists(dest)) dropdown.removeChild(document.getElementsByClassName(`${dest.location}`)[0]);
            if (key==="") dropdown.innerHTML="";
        }
    });
}



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

const destExists = (dest) => {
    for (const li of resultsList.children) {
        if (li.classList.contains(`${dest.location}`)) return true;
    }
    return false;
}