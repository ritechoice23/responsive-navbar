const togglerButton = document.querySelector('#toggle-button');
const menu = document.querySelector('#menu');

togglerButton.addEventListener('click', () => {
    menu.classList.toggle('active');
})