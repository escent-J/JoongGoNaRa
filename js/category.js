const header = document.getElementById("categoryMenu");
const hideMenu = document.querySelector(".hideMenu");

header.addEventListener("click", () => {
  for (let i = 0; i < hica.length; i++) {
    hica[i].classList.remove("on2");
  }
  console.log("test");
  if (hideMenu.classList.contains("on")) {
    hideMenu.classList.remove("on");
  } else {
    hideMenu.classList.add("on");
  }
});

// 메뉴의 소메뉴
const hica = document.querySelectorAll(".hica");
const hidehideAll = document.querySelectorAll(".hidehide");

for (let i = 0; i < hica.length; i++) {
  hidehideAll[i].addEventListener("mouseover", () => {
    for (let i = 0; i < hica.length; i++) {
      hica[i].classList.remove("on2");
    }
    hica[i].classList.add("on2");
  });
}

//핫아이템

const hotItem_rightBox = document.querySelectorAll(".hotItem_rightBox");
const hotItem_hide = document.querySelectorAll(".hotItem_hide");

for (let i = 0; i < hotItem_rightBox.length; i++) {
  hotItem_hide[i].addEventListener("mouseover", () => {
    for (let i = 0; i < hotItem_rightBox.length; i++) {
      hotItem_rightBox[i].classList.remove("on3");
    }
    hotItem_rightBox[i].classList.add("on3");
  });
}
window.onload = () => {
  hotItem_rightBox[0].classList.add("on3");
};
