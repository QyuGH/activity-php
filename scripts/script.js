//This contains the scripts for the basic interactions on the webpage
const barContainer = document.querySelector('.bar-container');
const navMenu = document.querySelector('ul');

barContainer.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


