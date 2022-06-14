'use strict';

const months = [
  {name: 'January', days: 31},
  {name: 'February', days: 28},
  {name: 'March', days: 31},
  {name: 'April', days: 30},
  {name: 'May', days: 31},
  {name: 'June', days: 30},
  {name: 'July', days: 31},
  {name: 'August', days: 31},
  {name: 'September', days: 30},
  {name: 'October', days: 31},
  {name: 'November', days: 30},
  {name: 'December', days: 31}
];

const days = [];
const monthsUI = document.getElementById('months');

for (let i = 1; i <= 31; i++) {
  days.push(i);
}
console.log('🚀 ~ days', days);

months.forEach((month) => {
  const eachMonthDiv = document.createElement('div');
  eachMonthDiv.setAttribute('class', 'month');
  const eachMonthTitle = document.createElement('h1');
  eachMonthTitle.appendChild(document.createTextNode(month.name));
  eachMonthDiv.appendChild(eachMonthTitle)
  monthsUI.appendChild(eachMonthDiv);

  const eachMonthDays = document.createElement('div');
  eachMonthDays.setAttribute('class', 'days')
  eachMonthDiv.appendChild(eachMonthDays);
});

const allMonthsUI = document.querySelectorAll('.month');
console.log('🚀 ~ allMonthsUI', allMonthsUI);
const januaryDiv = allMonthsUI[0];
console.log('🚀 ~ januaryDiv', januaryDiv);
const daysDiv = januaryDiv.querySelector('.days');


createMonthDiv(months[0]);
setMonthDays(months[0]);

// Function that creates the structure of the container for the month, its name and its days. 
function createMonthDiv(month) {
  const monthDiv = document.createElement('div');
  monthDiv.setAttribute('class', 'month');
  const monthTitle = document.createElement('h1');
  monthTitle.appendChild(document.createTextNode(month.name + '***'));
  monthDiv.appendChild(monthTitle)
  monthsUI.appendChild(monthDiv);

  const monthDays = document.createElement('div');
  monthDays.setAttribute('class', 'days')
  monthDiv.appendChild(monthDays);
}

// Funtion that creates an array for the total days of the month
function setMonthDays(month) {
  const monthDays = [];

  for (let day = 1; day <= month.days; day++) {
    monthDays.push(day);
  }

  monthDays.forEach((day) => {
    const eachDayUI = document.createElement('div');
    eachDayUI.setAttribute('class', 'day-number');
    eachDayUI.appendChild(document.createTextNode(day))
    daysDiv.appendChild(eachDayUI);
  });
}

