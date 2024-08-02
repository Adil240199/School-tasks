let input = document.createElement("input");
input.className = "input";
document.body.appendChild(input);

let keyboard = document.createElement("div");
keyboard.className = "keyboard";
document.body.appendChild(keyboard);



let keyBeginF = ['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12']
let numbersFromF = document.createElement("ul");
numbersFromF.className = "numbersFromF";
keyboard.append(numbersFromF);



for (let a = 0; a < keyBeginF.length; a++) {
  let fKeys = document.createElement("li");
  fKeys.textContent = keyBeginF[a];
  numbersFromF.appendChild(fKeys);
}

let keyCodeValues = ['Escape','112', '113', '114', '115', '115','116','117','118','119','120','121','122'];

let arrLiFromF = Array.from(numbersFromF.querySelectorAll('li'));
for (let a = 0; a < keyCodeValues.length; a++){
  arrLiFromF[a].setAttribute('data-keycode',keyCodeValues[a]);
};


input.addEventListener('keydown', function(event){
  let keyCode = event.key || event.keyCode
  for (let i = 0; i<arrLiFromF.length; i++){
    let datakeyCode = arrLiFromF[i].getAttribute('data-keycode');
    if ( keyCode === datakeyCode){
      arrLiFromF[i].style.color = "red"
     }
  }
});













let numbers = document.createElement("ul");
numbers.className = "numbers";
keyboard.appendChild(numbers);
for (let i = 1; i <= 9; i++) {
  let p = document.createElement("li");
  p.textContent = i;
  numbers.appendChild(p);
}

let numbersKeyboard = [ 1, 2, 3, 4,5,6,7,8,9];
const children = Array.from(numbers.children);
for (let a = 0; a < numbersKeyboard.length; a++){
  children[a].setAttribute('data-keycode',numbersKeyboard[a]);
};


input.focus();
input.addEventListener("keydown", function (event) {
   for (let i = 0; i < children.length; i++){
    let codeKeyboard =  children[i].getAttribute('data-keycode');
    if ( event.key === codeKeyboard){
      children[i].style.color = "red"
      }
  }
});
input.addEventListener("keyup", function (event) {
  for (let i = 0; i < children.length; i++){
   let codeKeyboard =  children[i].getAttribute('data-keycode');
   if ( event.key === codeKeyboard){
     children[i].style.color = "white"
     }
 }
});







