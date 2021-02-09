"use strict";

const destCards = document.getElementsByClassName("dest-card");
//console.log(destCards);
for (const destination of destCards) {
//console.log(destination);
const menu = destination.querySelectorAll('.dest-card nav li');

const content = destination.querySelectorAll('.display-dest-content li');

const hideall = () => {
    for (const el of content) { //Hide all content divs
        el.classList.remove("show");
        el.classList.add("hide");
    }
}

const resetactive = () => {
    for (const el of menu) { //Disable active from all li a
        el.classList.remove("active");
    }
}

//DEFAULT STATE
hideall(); //on load (first time) hide all
menu[0].classList.add("active"); //make info active (default)
content[0].classList.replace("hide","show"); /*show first content div*/

for (const el of menu) {
    /* const li = el.parentElement //get specific li from li a */
    const index = [...menu].indexOf(el); //make an array from lis of ul and then find the index of the specific li from above
    el.addEventListener("click", () => {
      hideall(); //hide all before selecting which one to show
      resetactive();
      content[index].classList.replace("hide", "show");
      el.classList.add("active");
    });
}
}