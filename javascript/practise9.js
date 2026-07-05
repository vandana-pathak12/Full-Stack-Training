const greeting = document.querySelector('#greeting');
const nameInput = document.querySelector('#nameInput');
const colorBox = document.querySelector('#colorBox');
const greetBtn = document.querySelector('#greetBtn');

greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim() || 'Guest';
    greeting.textContent = `Hello, ${name}!`;
    colorBox.style.backgroundColor = 'teal';
});