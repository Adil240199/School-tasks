let animal = document.querySelectorAll(".animal");
let textAnimal = document.querySelectorAll(".text_animal");
let hText = document.querySelectorAll(".h6_text");
let animalSmall = document.querySelectorAll(".animal_small")

animal[0].addEventListener("mouseover", function hov() {
  textAnimal[0].classList.add("hovered");
  hText[0].classList.add("hovered");
});
animal[0].addEventListener("mouseout", function hove() {
  textAnimal[0].classList.remove("hovered");
  hText[0].classList.remove("hovered");
});
animal[1].addEventListener("mouseover", function hov() {
  textAnimal[1].classList.add("hovered");
  hText[1].classList.add("hovered");
});
animal[1].addEventListener("mouseout", function hove() {
  textAnimal[1].classList.remove("hovered");
  hText[1].classList.remove("hovered");
});
animal[2].addEventListener("mouseover", function hov() {
  textAnimal[2].classList.add("hovered");
  hText[2].classList.add("hovered");
});
animal[2].addEventListener("mouseout", function hove() {
  textAnimal[2].classList.remove("hovered");
  hText[2].classList.remove("hovered");
});
animal[3].addEventListener("mouseover", function hov() {
  textAnimal[3].classList.add("hovered");
  hText[3].classList.add("hovered");
});
animal[3].addEventListener("mouseout", function hove() {
  textAnimal[3].classList.remove("hovered");
  hText[3].classList.remove("hovered");
});
animal[4].addEventListener("mouseover", function hov() {
  textAnimal[4].classList.add("hovered");
  hText[4].classList.add("hovered");
});
animal[4].addEventListener("mouseout", function hove() {
  textAnimal[4].classList.remove("hovered");
  hText[4].classList.remove("hovered");
});
animal[5].addEventListener("mouseover", function hov() {
  textAnimal[5].classList.add("hovered");
  hText[5].classList.add("hovered");
});
animal[5].addEventListener("mouseout", function hove() {
  textAnimal[5].classList.remove("hovered");
  hText[5].classList.remove("hovered");
});



animalSmall[0].addEventListener("mouseover", function hov() {
  textAnimal[0].classList.add("hovered");
  hText[0].classList.add("hovered");
});
animalSmall[0].addEventListener("mouseout", function hove() {
  textAnimal[0].classList.remove("hovered");
  hText[0].classList.remove("hovered");
});
animalSmall[1].addEventListener("mouseover", function hov() {
  textAnimal[1].classList.add("hovered");
  hText[1].classList.add("hovered");
});
animalSmall[1].addEventListener("mouseout", function hove() {
  textAnimal[1].classList.remove("hovered");
  hText[1].classList.remove("hovered");
});
animalSmall[2].addEventListener("mouseover", function hov() {
  textAnimal[2].classList.add("hovered");
  hText[2].classList.add("hovered");
});
animalSmall[2].addEventListener("mouseout", function hove() {
  textAnimal[2].classList.remove("hovered");
  hText[2].classList.remove("hovered");
});
animalSmall[3].addEventListener("mouseover", function hov() {
  textAnimal[3].classList.add("hovered");
  hText[3].classList.add("hovered");
});
animalSmall[3].addEventListener("mouseout", function hove() {
  textAnimal[3].classList.remove("hovered");
  hText[3].classList.remove("hovered");
});
animalSmall[4].addEventListener("mouseover", function hov() {
  textAnimal[4].classList.add("hovered");
  hText[4].classList.add("hovered");
});
animalSmall[4].addEventListener("mouseout", function hove() {
  textAnimal[4].classList.remove("hovered");
  hText[4].classList.remove("hovered");
});
animalSmall[5].addEventListener("mouseover", function hov() {
  textAnimal[5].classList.add("hovered");
  hText[5].classList.add("hovered");
});
animalSmall[5].addEventListener("mouseout", function hove() {
  textAnimal[5].classList.remove("hovered");
  hText[5].classList.remove("hovered");
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




const memoizedAdd = () => {
  let cache = {};
  return (9) => {
    if (9 in cache) {
      console.log('Fetching from cache');
      return cache[9];
    }
    else {
      console.log('Calculating result');
      let result = 9 + 10;
      cache[9] = result;
      return result;
    }
  }
  console.log(cache)

}
memoizedAdd()