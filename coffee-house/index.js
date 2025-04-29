// Навигационное меню
const burgerButtonMain = document.querySelector(".burgerButtonMain");
const burgerButton = document.querySelector(".burgerButton");
const adaptivMenu = document.querySelector(".adaptivMenu");
const linkHeaders = document.querySelectorAll(".linkHeader");
const navHeader = document.querySelector(".navHeader");

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

// Карусель
const arrows = document.querySelectorAll(".arrow");
const carousel = document.querySelector(".carousel");
const lines = document.querySelectorAll(".line");

let position = 0;
let lineIndex = 0;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

const slideWidth = 687;

function nextSlide() {
  if (position < (lines.length - 1) * slideWidth) {
    position += slideWidth;
    lineIndex++;
  } else {
    position = 0;
    lineIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (position > 0) {
    position -= slideWidth;
    lineIndex--;
  } else {
    position = (lines.length - 1) * slideWidth;
    lineIndex = lines.length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  carousel.style.left = `-${position}px`;
  updateActiveLine(lineIndex);
}

function updateActiveLine(index) {
  lines.forEach((line) => line.classList.remove("lineActive"));
  lines[index].classList.add("lineActive");
}

arrows[1].addEventListener("click", nextSlide);
arrows[0].addEventListener("click", prevSlide);

// Drag (перетаскивание карусели)
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("mouseleave", dragEnd);
carousel.addEventListener("touchend", dragEnd);
carousel.addEventListener("mousemove", dragMove);
carousel.addEventListener("touchmove", dragMove);

function dragStart(e) {
  startPosition = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
  isDragging = true;
}

function dragEnd() {
  isDragging = false;
  const movedBy = currentTranslate;

  if (movedBy < -100) {
    nextSlide();
  } else if (movedBy > 100) {
    prevSlide();
  }

  currentTranslate = 0;
  setTransform();
}

function dragMove(e) {
  if (!isDragging) return;
  const currentPosition = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
  currentTranslate = currentPosition - startPosition;
  setTransform();
}

function setTransform() {
  carousel.style.left = `-${position - currentTranslate}px`;
}