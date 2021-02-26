"use strict";

window.onload = function () {
  /*Array of slides*/
  const slidesArray = [
    ["images/destinations/img-gallery/slide-1.jpg", "Slide 1"],
    ["images/destinations/img-gallery/slide-2.jpg", "Slide 2"],
    ["images/destinations/img-gallery/slide-3.jpg", "Slide 3"],
    ["images/destinations/img-gallery/slide-4.jpg", "Slide 4"],
  ];
  let slideIndex = 0;

  /*Arrows change-slide*/
  const rightarr = document.getElementById("right-arrow");
  const leftarr = document.getElementById("left-arrow");

  rightarr.addEventListener("click", () => {
    endofslides(++slideIndex);
    setslide(slideIndex);
  });

  leftarr.addEventListener("click", () => {
    endofslides(--slideIndex);
    setslide(slideIndex);
  });

  /*Thumbnails change-slide*/
  const thumbnail = document.getElementsByClassName("thumb");
  for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("click", () => {
      setslide(i);
      slideIndex = i; /*update index to point to the currect img*/
    });
  }

  /*Change slide/img function*/
  const setslide = (index) => {
    const slide = document.getElementById("slide");
    slide.src = slidesArray[index][0];
    slide.alt = slidesArray[index][1];
  };

  /*Edges - update index function*/
  const endofslides = (index) => {
    if (index === slidesArray.length) {
      /*if end of array go to start*/
      slideIndex = 0;
      return 1;
    }
    if (index === -1) {
      /*if start of array go to the end*/
      slideIndex = slidesArray.length - 1;
      return 1;
    }
    return 0;
  };

  /*INTERVALS*/
  const timerNextSlide = () => {
    endofslides(++slideIndex);
    setslide(slideIndex);
  };

  let slidestimer = window.setInterval(timerNextSlide, 3 * 1000);
  let interval = true;

  /*PLAY BUTTON*/
  const play = document.getElementById("play-button");
  play.addEventListener("click", () => {
    if (!interval) {
      slidestimer = setInterval(timerNextSlide, 4 * 1000);
      interval = true;
    }
  });

  /*PAUSE BUTTON*/
  const pause = document.getElementById("pause-button");
  pause.addEventListener("click", () => {
    window.clearInterval(slidestimer);
    interval = false;
  });
};
