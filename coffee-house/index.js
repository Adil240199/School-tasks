const burgerButtonMain = document.querySelector(".burgerButtonMain");
const adaptivMenu = document.querySelector(".adaptivMenu");
const navHeader = document.querySelector(".navHeader");
const linkHeaders = document.querySelectorAll(".linkHeader");

burgerButtonMain.addEventListener("click", () => {
  adaptivMenu.classList.toggle("menuAdaptivActive");
  burgerButtonMain.classList.toggle("burgerButtonActive");
  navHeader.classList.toggle("navHeaderActive");
});

linkHeaders.forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      adaptivMenu.classList.remove("menuAdaptivActive");
      burgerButtonMain.classList.remove("burgerButtonActive");
      navHeader.classList.remove("navHeaderActive");
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    adaptivMenu.classList.remove("menuAdaptivActive");
    burgerButtonMain.classList.remove("burgerButtonActive");
    navHeader.classList.remove("navHeaderActive");
  }
});

// ====== Элементы ======
const container = document.querySelector(".sliders");
const carousel = document.querySelector(".carousel");
const slides = Array.from(document.querySelectorAll(".slider"));
const [btnPrev, btnNext] = document.querySelectorAll(".arrow");
const indicators = document.querySelectorAll(".line");

let currentIndex = 0;
let startX = 0;
let deltaX = 0;
let isDragging = false;
let isMoving = false;

// ====== Инициализация ======
function initCarousel() {
  carousel.style.transition = "transform 0.4s ease";
  goToSlide(0);
  window.addEventListener("resize", () => goToSlide(currentIndex));

  container.addEventListener("pointerdown", dragStart);
  container.addEventListener("pointermove", dragMove);
  container.addEventListener("pointerup", dragEnd);
  container.addEventListener("pointercancel", dragEnd);
}
initCarousel();

// ====== Переход к слайду ======
function goToSlide(idx) {
  if (isMoving) return;
  isMoving = true;
  const w = container.clientWidth;
  const count = slides.length;
  currentIndex = ((idx % count) + count) % count;
  carousel.style.transform = `translateX(-${w * currentIndex}px)`;
  updateIndicators();
  carousel.addEventListener(
    "transitionend",
    () => {
      isMoving = false;
    },
    { once: true }
  );
}

// ====== Индикаторы ======
function updateIndicators() {
  indicators.forEach((line, i) =>
    line.classList.toggle("lineActive", i === currentIndex)
  );
}

// ====== Кнопки ======
btnNext.addEventListener("click", () => {
  if (!isDragging) goToSlide(currentIndex + 1);
});
btnPrev.addEventListener("click", () => {
  if (!isDragging) goToSlide(currentIndex - 1);
});

// ====== Drag’n’Drop через Pointer Events ======
function dragStart(e) {
  if (isMoving) return;
  e.preventDefault(); // 👉 блокируем системные действия
  isDragging = true;
  startX = e.clientX;
  deltaX = 0;
  carousel.style.transition = "none";
  container.setPointerCapture(e.pointerId);
}

function dragMove(e) {
  if (!isDragging) return;
  deltaX = e.clientX - startX;
  const w = container.clientWidth;
  carousel.style.transform = `translateX(-${w * currentIndex - deltaX}px)`;
}

function dragEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  const w = container.clientWidth;
  const threshold = w / 4;
  if (deltaX < -threshold) goToSlide(currentIndex + 1);
  else if (deltaX > threshold) goToSlide(currentIndex - 1);
  else goToSlide(currentIndex);

  carousel.style.transition = "transform 0.4s ease";
  container.releasePointerCapture(e.pointerId);
}
