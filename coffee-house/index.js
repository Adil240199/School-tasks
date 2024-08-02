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

const arrows = document.querySelectorAll(".arrow"),
  carousel = document.querySelector(".carousel"),
  lines = document.querySelectorAll(".line");
let position = 0,
  lineindex = 0,
  isDragging = false,
  startPosition = 0,
  currentTranslate = 0;

const nextSlide = () => {
  if (position < (lines.length - 1) * 687) {
    position += 687;
    lineindex++;
  } else {
    position = 0;
    lineindex = 0;
  }
  carousel.style.left = -position + "px";
  thisSlide(lineindex);
};

const prevSlide = () => {
  if (position > 0) {
    position -= 687;
    lineindex--;
  } else {
    position = (lines.length - 1) * 687;
    lineindex = lines.length - 1;
  }
  carousel.style.left = -position + "px";
  thisSlide(lineindex);
};

const thisSlide = (index) => {
  for (let line of lines) {
    line.classList.remove("lineActive");
  }
  lines[index].classList.add("lineActive");
};

arrows[1].addEventListener("click", nextSlide);
arrows[0].addEventListener("click", prevSlide);

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mouseup", dragEnd);
carousel.addEventListener("mouseleave", dragEnd);
carousel.addEventListener("touchend", dragEnd);

carousel.addEventListener("mousemove", drag);
carousel.addEventListener("touchmove", drag);

function dragStart(event) {
  if (event.type === "touchstart") {
    startPosition = event.touches[0].clientX;
  } else {
    startPosition = event.clientX;
  }

  isDragging = true;
}

function dragEnd() {
  isDragging = false;

  const movedBy = currentTranslate - startPosition;

  if (movedBy < -100) {
    nextSlide();
  } else if (movedBy > 100) {
    prevSlide();
  }

  setPositionByIndex();
}

function drag(event) {
  if (isDragging) {
    const currentPosition =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const diff = currentPosition - startPosition;
    currentTranslate = diff;
    setTransform();
  }
}

function setTransform() {
  carousel.style.left = -position + currentTranslate + "px";
}

function setPositionByIndex() {
  const index = Math.round(currentTranslate / carousel.offsetWidth);
  const newIndex = Math.max(0, Math.min(index, carousel.children.length - 1));

  currentTranslate = newIndex * carousel.offsetWidth;
  setTransform();
}
