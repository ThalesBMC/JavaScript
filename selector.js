var button = document.getElementById("enter");
var input = document.getElementById("write");
var div = document.querySelector("div");

function createEvent() {
  var teste = document.createElement("p");
  teste.appendChild(document.createTextNode(input.value));
  div.appendChild(teste);
  input.value = "";
}
function addEvent() {
  if (input.value.length > 0) {
    createEvent();
  }
}
function addEvent2(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    createEvent();
  }
}
button.addEventListener("click", addEvent);

input.addEventListener("keypress", addEvent2);
