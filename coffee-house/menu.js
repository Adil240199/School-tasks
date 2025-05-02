document.addEventListener("DOMContentLoaded", () => {
  const burgerButtonMain = document.querySelector(".burgerButtonMain");
  const burgerButton = document.querySelector(".burgerButton");
  const adaptivMenu = document.querySelector(".adaptivMenu");
  const linkHeaders = document.querySelectorAll(".linkHeader");
  const navHeader = document.querySelector(".navHeader");

  const kinds = document.querySelectorAll(".kind");
  const buttonMore = document.querySelector(".refresh");
  const categories = document.querySelector(".catalog");

  fetch("./products.json")
    .then((response) => {
      if (!response.ok) throw new Error("Ошибка загрузки JSON");
      return response.json();
    })
    .then((products) => {
      function toggleMenu() {
        const isOpen = adaptivMenu.classList.contains("menuAdaptivActive");
        adaptivMenu.style.transform = isOpen ? "translateX(100%)" : "translateX(0%)";
        burgerButton.classList.toggle("burgerButtonActive", !isOpen);
        adaptivMenu.classList.toggle("menuAdaptivActive");
        navHeader.classList.toggle("navHeaderActive");
      }

      function closeMenu() {
        adaptivMenu.style.transform = "translateX(100%)";
        burgerButton.classList.remove("burgerButtonActive");
        adaptivMenu.classList.remove("menuAdaptivActive");
        navHeader.classList.remove("navHeaderActive");
      }

      burgerButtonMain.addEventListener("click", toggleMenu);
      linkHeaders.forEach((item) => item.addEventListener("click", closeMenu));

      function generateFile(category = "coffee") {
        categories.innerHTML = "";
        let localIndex = 0;

        products.forEach((item) => {
          if (item.category === category) {
            const coffeeElement = document.createElement("div");
            coffeeElement.classList.add("kindOfCoffee");
            if (localIndex > 3) coffeeElement.classList.add("kindOfCoffeeHide");

            coffeeElement.innerHTML = `
              <img class="imgCatalog" src="${item.imageSrc}" alt="${item.name}">
              <h5>${item.name}</h5>
              <p class="describeCoffee">${item.description}</p>
              <p class="price">$${item.price}</p>
            `;
            localIndex++;
            categories.appendChild(coffeeElement);
          }
        });

        buttonMore.style.display = (category === "coffee" || category === "dessert") ? "flex" : "none";
      }

      let currentActiveElement = null;
      if (kinds.length > 0) {
        currentActiveElement = kinds[0];
        currentActiveElement.classList.add("Kindactive");
      }

      kinds.forEach((item) => {
        item.addEventListener("click", () => {
          if (currentActiveElement) currentActiveElement.classList.remove("Kindactive");
          item.classList.add("Kindactive");
          currentActiveElement = item;

          const category = item.dataset.category || "coffee";
          generateFile(category);
        });
      });

      buttonMore.addEventListener("click", (e) => {
        e.preventDefault();
        buttonMore.style.display = "none";
        document.querySelectorAll(".kindOfCoffeeHide").forEach((el) => el.classList.remove("kindOfCoffeeHide"));
      });

      generateFile();
    })
    .catch((err) => console.error("Ошибка загрузки products.json:", err));
});
