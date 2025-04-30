// Время и дата
const time = document.querySelector(".time");
const dateElement = document.querySelector(".date");

function updateTime() {
  const now = new Date();
  const format = (n) => String(n).padStart(2, "0");
  time.textContent = `${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
}
setInterval(updateTime, 1000);

function updateDate() {
  const now = new Date();
  const options = { weekday: "long", month: "long", day: "numeric", timeZone: "UTC" };
  dateElement.textContent = now.toLocaleDateString("en-US", options);
}
setInterval(updateDate, 1000);

// Приветствие
const greeting = document.querySelector(".greeting");
let Gmorning = "Good morning", Gafternoon = "Good afternoon", Gevening = "Good evening", Gnight = "Good night";

function updateGreeting() {
  const hour = new Date().getHours();
  let text = hour < 6 ? Gnight : hour < 12 ? Gmorning : hour < 18 ? Gafternoon : Gevening;
  greeting.textContent = text;
}
setInterval(updateGreeting, 1000);

// Имя
const nameInput = document.querySelector(".name");

window.addEventListener("beforeunload", () => localStorage.setItem("name", nameInput.value));
window.addEventListener("load", () => {
  if (localStorage.getItem("name")) nameInput.value = localStorage.getItem("name");
});

// Фон
const body = document.body;
let timeOfDay;

function getTimeSegment(hour) {
  if (hour < 6) return "night";
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "evening";
}

function getRandomNum() {
  return String(Math.floor(Math.random() * 20) + 1).padStart(2, "0");
}

let randomNum = +getRandomNum();
function setBackground(num = randomNum) {
  const hour = new Date().getHours();
  timeOfDay = getTimeSegment(hour);
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${String(num).padStart(2, "0")}.jpg')`;
}
setBackground();

document.querySelector(".slide-next").addEventListener("click", () => {
  randomNum = randomNum >= 20 ? 1 : randomNum + 1;
  setBackground(randomNum);
});

document.querySelector(".slide-prev").addEventListener("click", () => {
  randomNum = randomNum <= 1 ? 20 : randomNum - 1;
  setBackground(randomNum);
});

// Погода
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
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = `weather-icon owf owf-${data.weather[0].id}`;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    weatherError.textContent = "";
  } catch {
    weatherError.textContent = "Error! Nothing to geocode for ''!";
    [temperature, weatherDescription, wind, humidity].forEach(el => el.textContent = "");
  }
}

window.addEventListener("load", () => {
  if (localStorage.getItem("city")) city.value = localStorage.getItem("city");
  getWeather();
});
city.addEventListener("change", getWeather);
window.addEventListener("beforeunload", () => localStorage.setItem("city", city.value));

// Цитаты
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

async function getQuotes() {
  const res = await fetch("data.json");
  const data = await res.json();
  const random = data[Math.floor(Math.random() * data.length)];
  quote.textContent = random.text;
  author.textContent = random.author;
}
getQuotes();
changeQuote.addEventListener("click", getQuotes);

// Аудиоплеер
const audio = document.querySelector(".audio");
const playItems = document.querySelectorAll(".play-item");
const songs = [
  "assets_sounds_AquaCaelestis",
  "assets_sounds_Ennio Morricone",
  "assets_sounds_River Flows In You",
  "assets_sounds_Summer Wind",
];
let songIndex = 0;
let isPlaying = false;

function loadSong(index) {
  playItems.forEach((item, i) => item.style.color = i === index ? "rgb(162, 222, 229)" : "white");
  audio.src = `./assets/sounds/${songs[index]}.mp3`;
}

function playAudio() {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    play.classList.add("pause");
  } else {
    audio.pause();
    isPlaying = false;
    play.classList.remove("pause");
  }
}

loadSong(songIndex);

const play = document.querySelector(".play");
play.addEventListener("click", playAudio);

document.querySelector(".play-next").addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  playAudio();
});

document.querySelector(".play-prev").addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  playAudio();
});

// Прогрессбар
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-block");

audio.addEventListener("timeupdate", (e) => {
  const { duration, currentTime } = e.srcElement;
  progress.style.width = `${(currentTime / duration) * 100}%`;
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});

// Перевод
const LangGreet = {
  Morning: { ru: "Доброе утро", en: "Good morning" },
  Afternoon: { ru: "Добрый день", en: "Good afternoon" },
  Evening: { ru: "Добрый вечер", en: "Good evening" },
  Night: { en: "Good night", ru: "Доброй ночи" },
};

const blockLang = document.querySelector(".block_lang");
const allLang = ["en", "ru"];

blockLang.addEventListener("change", () => {
  location.href = window.location.pathname + "#" + blockLang.value;
  location.reload();
});

function changeLanguage() {
  let hash = window.location.hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  blockLang.value = hash;
  Gmorning = LangGreet.Morning[hash];
  Gafternoon = LangGreet.Afternoon[hash];
  Gevening = LangGreet.Evening[hash];
  Gnight = LangGreet.Night[hash];
}
changeLanguage();

// Настройки
const settingIcon = document.querySelector(".setting-icon");
const setting = document.querySelector(".setting");
const widgets = document.querySelectorAll(".zadekides-naxamopud");
const player = document.querySelector(".player");
const weather = document.querySelector(".weather");
const greetContainer = document.querySelector(".greeting-container");

settingIcon.addEventListener("click", () => setting.classList.toggle("visible"));

widgets[0].addEventListener("click", () => player.classList.toggle("hide"));
widgets[1].addEventListener("click", () => weather.classList.toggle("hide"));
widgets[2].addEventListener("click", () => {
  time.classList.toggle("hide");
  dateElement.classList.toggle("hide");
});
widgets[3].addEventListener("click", () => greetContainer.classList.toggle("hide"));

// ToDo
const addMessage = document.querySelector(".message");
const addButton = document.querySelector(".add");
const todo = document.querySelector(".todo");
let todoList = JSON.parse(localStorage.getItem("todo")) || [];

function displayMessages() {
  todo.innerHTML = todoList.map((item, i) => `
    <li>
      <input type="checkbox" id="item_${i}" ${item.checked ? "checked" : ""}>
      <label for="item_${i}" class="${item.important ? "important" : ""}">${item.todo}</label>
    </li>
  `).join("");
}

addButton.addEventListener("click", () => {
  todoList.push({ todo: addMessage.value, checked: false, important: false });
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(todoList));
  addMessage.value = "";
});

todo.addEventListener("change", (event) => {
  const label = todo.querySelector(`[for=${event.target.id}]`);
  const item = todoList.find(i => i.todo === label.textContent);
  if (item) {
    item.checked = !item.checked;
    localStorage.setItem("todo", JSON.stringify(todoList));
  }
});

todo.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  todoList = todoList.filter((item, i) => {
    if (item.todo === event.target.textContent) {
      if (event.ctrlKey || event.metaKey) return false;
      item.important = !item.important;
    }
    return true;
  });
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(todoList));
});

displayMessages();

document.querySelector(".todo-icon").addEventListener("click", () => {
  document.querySelector(".todo_list").classList.toggle("visible");
});