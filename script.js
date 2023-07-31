window.addEventListener("load", calculateTime);

function calculateTime() {
  let date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let min = date.getMinutes();
  let time = hour >= 12 ? "PM" : "AM";
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;

  document.getElementById("day").innerHTML = days[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("min").innerHTML = min;
  document.getElementById("time").innerHTML = time;

  setTimeout(calculateTime, 200);
}
