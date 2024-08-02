const burgerButtonMain = document.querySelector(".burgerButtonMain"),
  burgerButton = document.querySelector(".burgerButton"),
  adaptivMenu = document.querySelector(".adaptivMenu"),
  linkHeaders = document.querySelectorAll(".linkHeader"),
  navHeader = document.querySelector(".navHeader");
burgerButtonMain.addEventListener("click", () => {
  const isMenuOpen = adaptivMenu.classList.contains("menuAdaptivActive");
  if (!isMenuOpen) {
    adaptivMenu.style.transform = "translateX(0%)";
    burgerButton.classList.add("burgerButtonActive");
   } else {
    adaptivMenu.style.transform = "translateX(100%)";
    burgerButton.classList.remove("burgerButtonActive");
    burgerButton.classList.add("burgerButton");
  }
  adaptivMenu.classList.toggle("menuAdaptivActive");
  navHeader.classList.toggle("navHeaderActive");
});
linkHeaders.forEach((item) => {
  item.addEventListener("click", () => {
    adaptivMenu.style.transform = "translateX(100%)";
    burgerButton.classList.remove("burgerButtonActive");
    burgerButton.classList.add("burgerButton");
    adaptivMenu.classList.toggle("menuAdaptivActive");
    navHeader.classList.toggle("navHeaderActive");
  });
});



import products from "./products.json" assert { type: "json" };
const kinds = document.querySelectorAll(".kind");
function generateFile(category = "coffee") {
  const categories = document.querySelector(".catalog");
  let localIndex = 0;
  categories.innerHTML = "";
  products.forEach((item) => {
    if (item.category == category) {
      const coffeeElement = document.createElement("div");
      coffeeElement.classList.add("kindOfCoffee");
      if (localIndex > 3){
        coffeeElement.classList.add("kindOfCoffeeHide")
      }
      coffeeElement.innerHTML = `
              <img class="imgCatalog" src="${item.imageSrc}" alt="coffeeImage">
              <h5>${item.name}</h5>
              <p class="describeCoffee">${item.description}</p>
              <p class="price">$${item.price}</p>
          `;
          localIndex++;
      categories.appendChild(coffeeElement);
    }
  });
}
kinds[0].addEventListener("click", function () {
  generateFile("coffee");
  buttonMore.style.display = "flex";
});
kinds[1].addEventListener("click", function () {
  generateFile("tea");
});
kinds[2].addEventListener("click", function () {
  generateFile("dessert");
  buttonMore.style.display = "flex";

});
let currentActiveElement = null;
if (kinds.length > 0) {
  currentActiveElement = kinds[0];
  currentActiveElement.classList.add("Kindactive");
}
kinds.forEach((item) => {
  item.addEventListener("click", () => {
    if (currentActiveElement) {
      currentActiveElement.classList.remove("Kindactive");
    }
    item.classList.add("Kindactive");
    currentActiveElement = item;
  });
});


const buttonMore = document.querySelector(".refresh");
buttonMore.addEventListener("click", (event) => {
  event.preventDefault();
  buttonMore.style.display = "none";
  const kindOfCoffee = document.querySelectorAll(".kindOfCoffee");
  kindOfCoffee.forEach((item) => {
    item.classList.remove("kindOfCoffeeHide");
  });
});

generateFile();
