const time = document.querySelector(".time");

function showTime() {
  let date = new Date();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let second =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  time.innerHTML = `${hours}:${minutes}:${second}`;
}
setInterval(showTime, 1000);

function showDate() {
  let newDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const currentDate = newDate.toLocaleDateString("en-US", options);

  let year = (document.querySelector(".date").innerHTML = currentDate);
}
setInterval(showDate, 1000);
let Gmorning = "Good morning";
let Gafternoon = "Good afternoon";
let Gevening = "Good evening";
let Gnight = "Good nigh";
let greet = document.querySelector(".greeting");
let dateTimeDay = new Date();
const hour = dateTimeDay.getHours();
let minute = dateTimeDay.getMinutes();
function getTimeOfDay() {
  let dateTimeDay = new Date();
  let hour = dateTimeDay.getHours();
  let minute = dateTimeDay.getMinutes();
  let greeting;

  if (hour >= 6 && hour < 12) {
    greeting = `${Gmorning}`;
  } else if (hour >= 12 && hour < 18) {
    greeting = `${Gafternoon}`;
  } else if (hour >= 18 && hour < 24) {
    greeting = `${Gevening}`;
  } else {
    greeting = `${Gnight}`;
  }
  return (greet.textContent = `${greeting}`);
}

setInterval(getTimeOfDay, 1000);

const name = document.querySelector(".name");
function setLocalStorage() {
  localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);

function getRandomNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(21);
  return Math.floor(Math.random() * (max - min)) + min;
}

const body = document.body;
let timeOfDay;
function setBg() {
  let bgNum = getRandomNum();
  let result = String(bgNum);
  let res = result.padStart(2, "0");
  if (hour >= 6 && hour < 12) {
    timeOfDay = "morning";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "afternoon";
  } else if (hour >= 18 && hour < 24) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }
  return (body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${res}.jpg')`);
}

console.log(setBg());

const slideNext = document.querySelector(".slide-next");
let slidePrev = document.querySelector(".slide-prev");

let randomNum = 1;
slideNext.addEventListener("click", function () {
  randomNum++;
  randomNum >= 21 ? (randomNum = 1) : randomNum;
  let NumberToString = String(randomNum);
  let resNext = NumberToString.padStart(2, "0");
  return (body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${resNext}.jpg')`);
});

slidePrev.addEventListener("click", function () {
  randomNum--;
  randomNum <= 0 ? (randomNum = 20) : randomNum;
  let NumberToString = String(randomNum);
  let resPrev = NumberToString.padStart(2, "0");
  return (body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${resPrev}.jpg')`);
});

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherError = document.querySelector(".weather-error");
const city = document.querySelector(".city");

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=8b1fb6eb512a779063ba491381ebe4d6&units=metric`;
    weatherError.textContent = "";
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherIcon.classList.add("res");
    wind.textContent = `Wind speed:${Math.round(data.wind.speed)}m/s`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    humidity.textContent = `Humidity:${data.main.humidity}%`;
    weatherDescription.textContent = data.weather[0].description;
  } catch (Error) {
    weatherError.textContent = "Error! Nothing to geocode for ''!";
    wind.textContent = "";
    temperature.textContent = "";
    humidity.textContent = "";
    weatherDescription.textContent = "";
  }
}

getWeather();

city.addEventListener("change", getWeather);
function setLocalStorageCity() {
  localStorage.setItem("city", city.value);
}
window.addEventListener("beforeunload", setLocalStorageCity);

function getLocalStorageCity() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
}
window.addEventListener("load", getLocalStorageCity);

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
async function getQuotes() {
  const quotes = "data.json";
  const res = await fetch(quotes);
  const data = await res.json();
  const randomIndex = Math.floor(Math.random() * (data.length - 1));
  const resu = data[randomIndex];
  return (
    (quote.textContent = `${resu.text}`),
    (author.textContent = `${resu.author}`)
  );
}
getQuotes();

changeQuote.addEventListener("click", getQuotes);

// player

const audio = document.querySelector(".audio");
const playItem = document.querySelectorAll(".play-item");
const songs = [
  "assets_sounds_AquaCaelestis",
  "assets_sounds_Ennio Morricone",
  "assets_sounds_River Flows In You",
  "assets_sounds_Summer Wind",
];
let songIndex = 0;
function loadSong(song) {
  playItem[`${songIndex}`].style.color = "rgb(162, 222, 229)";
  audio.src = `./assets/sounds/${song}.mp3`;
}
loadSong(songs[songIndex]);

const play = document.querySelector(".play");
let playNum = 0;
let isPlay = false;
function playAudio() {
  if (!isPlay) {
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
    play.classList.add("pause");
  } else {
    audio.currentTime = 0;
    audio.pause();
    isPlay = false;
    play.classList.remove("pause");
  }
}
play.addEventListener("click", playAudio);

const playNext = document.querySelector(".play-next");
playNext.addEventListener("click", function () {
  songIndex++;
  playItem[`${songIndex - 1}`].style.color = "white";
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playAudio();
});

const playPrev = document.querySelector(".play-prev");
playPrev.addEventListener("click", function () {
  songIndex--;
  playItem[`${songIndex + 1}`].style.color = "white";
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playAudio();
});

// Progress bar
const progress = document.querySelector(".progress");
function UpdateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audio.addEventListener("timeupdate", UpdateProgress);

const progressContainer = document.querySelector(".progress-block");
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}
progressContainer.addEventListener("click", setProgress);

// translater

const LangGreet = {
  Morning: {
    ru: "Доброе утро",
    en: "Good morning",
  },
  Afternoon: {
    ru: "Добрый день",
    en: "Good afternoon",
  },
  Evening: {
    ru: "Добрый вечер",
    en: "Good evening",
  },
  Night: {
    en: "Good night",
    ru: "Доброй ночи",
  },
};
const blockLang = document.querySelector(".block_lang");
blockLang.addEventListener("change", changeURLLanguage);
const allLang = ["en", "ru"];

function changeURLLanguage() {
  let lang = blockLang.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  blockLang.value = hash;
  // Не судить строго мой первый перевод стриницы
  Gmorning = LangGreet["Morning"][hash];
  Gafternoon = LangGreet["Afternoon"][hash];
  Gevening = LangGreet["Evening"][hash];
  Gnight = LangGreet["Night"][hash];
}
changeLanguage();

// setting
let setitingIcon = document.querySelector(".setting-icon"),
  setting = document.querySelector(".setting"),
  zadekidesNaxamopud = document.querySelectorAll(".zadekides-naxamopud"),
  player = document.querySelector(".player"),
  weather = document.querySelector(".weather"),
  curDate = document.querySelector(".date"),
  greetengCont = document.querySelector(".greeting-container"),
  hiden = document.querySelector(".hide");

function menuSetting() {
  setting.classList.toggle("visible");
}
setitingIcon.addEventListener("click", menuSetting);
function audioHiden() {
  player.classList.toggle("hide");
}

function WeatherHiden() {
  weather.classList.toggle("hide");
}

function dateHiden() {
  time.classList.toggle("hide");
  curDate.classList.toggle("hide");
}
function greetHiden() {
  let r = greetengCont.classList.toggle("hide");
}
zadekidesNaxamopud[0].addEventListener("click", audioHiden);
zadekidesNaxamopud[1].addEventListener("click", WeatherHiden);
zadekidesNaxamopud[2].addEventListener("click", dateHiden);
zadekidesNaxamopud[3].addEventListener("click", greetHiden);

//TodoList
let addMessage = document.querySelector(".message"),
  addbutton = document.querySelector(".add"),
  todo = document.querySelector(".todo");

let todoList = [];

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  displayMessages();
}
addbutton.addEventListener("click", function () {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  todoList.push(newTodo);
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(todoList));
  addMessage.value = "";
});

function displayMessages() {
  let displayMessage = "";
  if (todoList.length === 0) todo.innerHTML = "";
  todoList.forEach(function (item, i) {
    displayMessage += ` 
    <li>
    <input type = 'checkbox' id = 'item_${i}' ${item.checked ? "checked" : ""}>
    <label for = 'item_${i}' class="${item.important ? "important" : ""}">${
      item.todo
    }</label>
    </li> `;
    todo.innerHTML = displayMessage;
  });
}

todo.addEventListener("change", function (event) {
  let valueLabel = todo.querySelector(
    "[for=" + event.target.getAttribute("id") + "]"
  ).innerHTML;

  todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem("todo", JSON.stringify(todoList));
    }
  });
});

//выделение важного
todo.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  todoList.forEach(function (item, i) {
    if (item.todo === event.target.innerHTML) {
      if (event.ctrlKey || event.metaKey) {
        todoList.splice(i, 1);
      } else {
        item.important = !item.important;
      }
      displayMessages();
      localStorage.setItem("todo", JSON.stringify(todoList));
    }
  });
});

//button todo
let todoButton = document.querySelector('.todo-icon'),
todoListBlock = document.querySelector('.todo_list')
console.log(todoListBlock)
todoButton.addEventListener('click', function(){
todoListBlock.classList.toggle('visible')
} )