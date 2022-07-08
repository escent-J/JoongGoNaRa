"use strict";

//최근 업로드 상품
const bannerBox = document.querySelector("#recentItemBox > ul");
const bannerItem = document.querySelectorAll(".recentItems");

const prevBtn = document.getElementById("recentItemPrevBtn");
const nextBtn = document.getElementById("recentItemNextBtn");

const size = bannerItem[0].clientWidth;

let counter = 0;

let banner = setInterval(() => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 5000);
//1000ms = 1초

nextBtn.addEventListener("click", () => {
  clearInterval(banner);
  banner = setInterval(() => {
    if (counter < bannerItem.length - 1) {
      counter++;
      bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    } else if (counter === bannerItem.length - 1) {
      counter = 0;
      bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }
  }, 5000);
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter === bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

prevBtn.addEventListener("click", () => {
  clearInterval(banner);
  banner = setInterval(() => {
    if (counter < bannerItem.length - 1) {
      counter++;
      bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    } else if (counter === bannerItem.length - 1) {
      counter = 0;
      bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }
  }, 5000);
  if (counter > 0) {
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else {
    counter = bannerItem.length - 1;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});
//최근 업로드 상품
