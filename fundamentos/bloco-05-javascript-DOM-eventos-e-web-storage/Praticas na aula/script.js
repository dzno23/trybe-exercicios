const header = document.getElementById('header-container');
const sectionEmergency = document.getElementsByClassName('emergency-tasks');
const sectionNoEmergency = document.getElementsByClassName('no-emergency-tasks');
const titleEmergency = document.querySelectorAll('.emergency-tasks h3');
const titleNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
const footer = document.getElementById('footer-container');


header.style.backgroundColor = '#00b069';
sectionEmergency[0].style.backgroundColor = '#ff9f84';
sectionNoEmergency[0].style.backgroundColor = '#f9db5e';

for (let index = 0; index < titleEmergency.length; index += 1) {
    titleEmergency[index].style.backgroundColor = '#a500f3';
};

for (let index = 0; index < titleNoEmergency.length; index += 1) {
    titleNoEmergency[index].style.backgroundColor = '#232525';
};

footer.style.background = '#003533';


