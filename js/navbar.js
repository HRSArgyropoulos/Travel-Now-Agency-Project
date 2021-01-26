"use strict";

window.onload = function () {
    const nav = document.getElementById('navbar');
    const footer = document.getElementById('footer');
    
    let start;
    const homepage = document.querySelector("#homepage");
    if (homepage !== null) {
        start = document.getElementById('top-dest');
    } else {
        start = document.getElementsByClassName("sub-page-top")[0];
        nav.classList.add('sticky-nav-subpage');
    }

    start = start.offsetTop-100;
    console.log(start);
    //console.log(start);
    const end = footer.offsetTop-100;
    //console.log(end);
    window.onscroll = () => {
        if (window.pageYOffset >= start && window.pageYOffset <= end) {
            nav.classList.add('sticky-nav');
        } else {
            nav.classList.remove('sticky-nav');
        }
    }
}