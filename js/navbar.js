"use strict";

window.onload = function () {
  const nav = document.getElementById("navbar");
  const footer = document.getElementById("footer");
  const icon = document.getElementsByClassName("fa");
  //console.log(icon);

  let start;
  const header = document.getElementsByTagName("header")[0];
  if (document.querySelector("#homepage") !== null) {
    start = header;
  } else {
    start = document.getElementsByClassName("page-heading")[0];
    header.style.height = 100 + "px";
    nav.classList.add("sticky-nav-subpage");
  }
  start = start.offsetTop + start.offsetHeight;
  //console.log(start);

  const end = footer.offsetTop - 100;
  //console.log(end);
  window.onscroll = () => {
    if (window.pageYOffset >= start && window.pageYOffset <= end) {
      nav.classList.add("sticky-nav");
      for (const icn of icon) icn.classList.add("fa-xs");
    } else {
      nav.classList.remove("sticky-nav");
      for (const icn of icon) icn.classList.remove("fa-xs");
    }
  };
};
