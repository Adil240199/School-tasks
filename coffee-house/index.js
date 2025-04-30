// Навигационное меню
const burgerButtonMain = document.querySelector(".burgerButtonMain");
const burgerButton = document.querySelector(".burgerButton");
const adaptivMenu = document.querySelector(".adaptivMenu");
const linkHeaders = document.querySelectorAll(".linkHeader");
const navHeader = document.querySelector(".navHeader");

burgerButtonMain.addEventListener("click", () => {
  const isMenuOpen = adaptivMenu.classList.contains("menuAdaptivActive");

  adaptivMenu.style.transform = isMenuOpen
    ? "translateX(100%)"
    : "translateX(0%)";
  burgerButton.classList.toggle("burgerButtonActive", !isMenuOpen);
  adaptivMenu.classList.toggle("menuAdaptivActive");
  navHeader.classList.toggle("navHeaderActive");
});

linkHeaders.forEach((item) => {
  item.addEventListener("click", () => {
    adaptivMenu.style.transform = "translateX(100%)";
    burgerButton.classList.remove("burgerButtonActive");
    adaptivMenu.classList.remove("menuAdaptivActive");
    navHeader.classList.remove("navHeaderActive");
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

function updateCarousel() {
  carousel.style.left = `-${position}px`;
  updateActiveLine(lineIndex);
}

function updateActiveLine(index) {
  lines.forEach((line) => line.classList.remove("lineActive"));
  lines[index].classList.add("lineActive");
}

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

arrows[1].addEventListener("click", nextSlide);
arrows[0].addEventListener("click", prevSlide);

// Drag
function dragStart(e) {
  startPosition = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
  isDragging = true;

  document.addEventListener("mousemove", dragMove);
  document.addEventListener("mouseup", dragEnd);
  document.addEventListener("touchmove", dragMove);
  document.addEventListener("touchend", dragEnd);
}

function dragEnd() {
  isDragging = false;

  if (currentTranslate < -100) {
    nextSlide();
  } else if (currentTranslate > 100) {
    prevSlide();
  }

  currentTranslate = 0;
  setTransform();

  document.removeEventListener("mousemove", dragMove);
  document.removeEventListener("mouseup", dragEnd);
  document.removeEventListener("touchmove", dragMove);
  document.removeEventListener("touchend", dragEnd);
}

function dragMove(e) {
  if (!isDragging) return;

  const currentPosition = e.type.includes("touch")
    ? e.touches[0].clientX
    : e.clientX;
  currentTranslate = currentPosition - startPosition;
  setTransform();
}

function setTransform() {
  carousel.style.left = `-${position - currentTranslate}px`;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
