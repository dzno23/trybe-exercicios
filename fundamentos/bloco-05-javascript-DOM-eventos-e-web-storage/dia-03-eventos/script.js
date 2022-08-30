function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const daysList = document.getElementById('days');

for (let index = 0; index < decemberDaysList.length; index += 1) {
  const day = document.createElement('li');
  day.innerText = decemberDaysList[index];
  day.className = 'day';
  if (day.innerText == 24 || day.innerText == 25 || day.innerText == 31) {
    day.className += ' holiday';
  }
  if (day.innerText == 4 || day.innerText == 11 || day.innerText == 18 || day.innerText == 25) {
    day.className += ' friday'
  }
  daysList.appendChild(day);
}

const buttonsContainer = document.querySelector('.buttons-container');

function createHolidayButton(texto) {
  let btnHoliday = document.createElement('button');
  btnHoliday.innerText = texto;
  btnHoliday.id = 'btn-holiday';
  buttonsContainer.appendChild(btnHoliday);
}
createHolidayButton('Feriados');

const btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', bgColorHelidays);
function bgColorHelidays() {
  let day = document.getElementsByClassName('holiday');
  for (let index = 0; index < day.length; index += 1) {
    day[index].style.backgroundColor = 'rgba(0, 128, 0, 0.404)';
    day[index].style.color = '#008000'
  }
}

function createFridayButton(texto) {
  let fridayButton = document.createElement('button');
  fridayButton.innerText = texto;
  fridayButton.id = 'btn-friday';
  buttonsContainer.appendChild(fridayButton);
}
createFridayButton('Sexta-feira');

const fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', sextou);
function sextou() {
  let day = document.getElementsByClassName('friday');
  for (let index = 0; index < day.length; index += 1) {
    day[index].innerText = 'Sextouu!!!'
  }
}

const zoomInDay = document.getElementsByClassName('day');

for (let index = 0; index < zoomInDay.length; index += 1) {
  let day = zoomInDay[index];
  day.addEventListener('mouseover', zoomDay);
  day.addEventListener('mouseleave', zommOutDay)
  function zoomDay() {
    day.style.fontSize = '23px';
    day.style.fontWeight = 600;
    day.style.backgroundColor = '#ddd';
  }
  function zommOutDay() {
    day.style.fontSize = '20px';
    day.style.fontWeight = 500;
    day.style.backgroundColor = '#eee';
  }
}

// const myTasks = document.querySelector('.my-tasks');

// console.log(myTasks);