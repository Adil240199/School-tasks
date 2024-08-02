let textAnimal = document.querySelectorAll(".circle_indicator");
let animal = document.querySelectorAll(".figure");
let hText = document.querySelectorAll(".circle_indicatorBig");
let dollar = document.querySelectorAll(".dollar");

animal[0].addEventListener("mouseover", function hov() {
  textAnimal[0].classList.add("hovered");
  hText[0].classList.add("hovered");
  dollar[0].classList.add("hovered");
});
animal[0].addEventListener("mouseout", function hove() {
  textAnimal[0].classList.remove("hovered");
  hText[0].classList.remove("hovered");
  dollar[0].classList.remove("hovered");
});
animal[1].addEventListener("mouseover", function hov() {
  textAnimal[1].classList.add("hovered");
  hText[1].classList.add("hovered");
  dollar[1].classList.add("hovered");
});
animal[1].addEventListener("mouseout", function hove() {
  textAnimal[1].classList.remove("hovered");
  hText[1].classList.remove("hovered");
  dollar[1].classList.remove("hovered");
});
animal[2].addEventListener("mouseover", function hov() {
  textAnimal[2].classList.add("hovered");
  hText[2].classList.add("hovered");
  dollar[2].classList.add("hovered");
});
animal[2].addEventListener("mouseout", function hove() {
  textAnimal[2].classList.remove("hovered");
  hText[2].classList.remove("hovered");
  dollar[2].classList.remove("hovered");
});
animal[3].addEventListener("mouseover", function hov() {
  textAnimal[3].classList.add("hovered");
  hText[3].classList.add("hovered");
  dollar[3].classList.add("hovered");
});
animal[3].addEventListener("mouseout", function hove() {
  textAnimal[3].classList.remove("hovered");
  hText[3].classList.remove("hovered");
  dollar[3].classList.remove("hovered");
});
animal[4].addEventListener("mouseover", function hov() {
  textAnimal[4].classList.add("hovered");
  hText[4].classList.add("hovered");
  dollar[4].classList.add("hovered");
});
animal[4].addEventListener("mouseout", function hove() {
  textAnimal[4].classList.remove("hovered");
  hText[4].classList.remove("hovered");
  dollar[4].classList.remove("hovered");
});
animal[5].addEventListener("mouseover", function hov() {
  textAnimal[5].classList.add("hovered");
  hText[5].classList.add("hovered");
  dollar[5].classList.add("hovered");
});
animal[5].addEventListener("mouseout", function hove() {
  textAnimal[5].classList.remove("hovered");
  hText[5].classList.remove("hovered");
  dollar[5].classList.remove("hovered");
});
animal[6].addEventListener("mouseover", function hov() {
  textAnimal[6].classList.add("hovered");
  hText[6].classList.add("hovered");
  dollar[7].classList.add("hovered");
});
animal[6].addEventListener("mouseout", function hove() {
  textAnimal[6].classList.remove("hovered");
  hText[6].classList.remove("hovered");
  dollar[6].classList.remove("hovered");
});
animal[7].addEventListener("mouseover", function hov() {
  textAnimal[7].classList.add("hovered");
  hText[7].classList.add("hovered");
  dollar[7].classList.add("hovered");
});
animal[7].addEventListener("mouseout", function hove() {
  textAnimal[7].classList.remove("hovered");
  hText[7].classList.remove("hovered");
  dollar[7].classList.remove("hovered");
});


let burger = document.querySelector('.menu_burger')
let navTablet = document.querySelector('.nav_tablet')
burger.addEventListener("click", function open() {
  navTablet.classList.add("open");
});

navTablet.addEventListener("mouseout", function close() {
   navTablet.classList.remove("open");
   navTablet.classList.add("navTablet");
});