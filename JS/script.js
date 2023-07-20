//* Calling Variables
let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let amPmDis = document.getElementById('amPm');
let week = document.getElementById('week');
let date = document.getElementById('date');
let format = document.getElementById('format');
let formatChangeBtn = document.getElementById('formatChangeBtn');

let is12HoursFormat = false;

//* Updating Time Function 
updateTimeDisplay = (time) => {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let amPm = hours >= 12 ? 'PM' : 'AM';

  //* Handling 12 Hours Format
  if (is12HoursFormat) {
    hours = hours % 12 || 12;
    amPmDis.style.display = 'block'
  } else {
    amPmDis.style.display = 'none'
  }

  hrs.innerHTML = (hours < 10 ? '0' : '') + hours;
  min.innerHTML = (minutes < 10 ? '0' : '') + minutes;
  sec.innerHTML = (seconds < 10 ? '0' : '') + seconds;
  amPmDis.innerHTML = amPm
}

updateTimeDisplay(new Date());

setInterval(() => {
  updateTimeDisplay(new Date());
}, 1000);

//* Adding Click Function

formatChangeBtn.addEventListener('click', () => {
  if (is12HoursFormat) {
    is12HoursFormat = false;
    formatChangeBtn.innerHTML = 'Switch To 12 Hours';
    format.innerHTML = '24 Hours'
  } else {
    is12HoursFormat = true;
    formatChangeBtn.innerHTML = 'Switch To 24 Hours';
    format.innerHTML = '12 Hours'
  }
  updateTimeDisplay(new Date());
})

//* Adding Week Function

let dayOfWeeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let currentDay = new Date();
let dayOfWeeksInd = currentDay.getDay();
let currentWeek = dayOfWeeks[dayOfWeeksInd];
week.innerHTML = currentWeek;

//* Adding Dates Function

let currentDate = currentDay.toLocaleDateString();
date.innerHTML = currentDate