//variables
const hourDisplay = document.querySelector(".hour");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");

// date variables
function displayTime() {
  let dateTime = new Date(),
    hour = dateTime.getHours(),
    minute = dateTime.getMinutes(),
    second = dateTime.getSeconds();

  hourDisplay.innerHTML = hour;
  minuteDisplay.innerHTML = minute;
  if (second < 10) {
    secondDisplay.innerHTML = "0" + second;
  } else {
    secondDisplay.innerHTML = second;
  }
}
displayTime();
//1 saniye
setInterval(displayTime, 1000);
