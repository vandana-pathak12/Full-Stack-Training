// const greeting = document.querySelector('#greeting');
// const nameInput = document.querySelector('#nameInput');
// const colorBox = document.querySelector('#colorBox');
// const greetBtn = document.querySelector('#greetBtn');

// greetBtn.addEventListener('click', () => {
//     const name = nameInput.value.trim() || 'Guest';
//     greeting.textContent = `Hello, ${name}!`;
//     colorBox.style.backgroundColor = 'teal';
// });

//practise 10
// const playground = document.querySelector('#playground');
// const keyInput = document.querySelector('#keyInput');
// const status = document.querySelector('#status');

// playground.addEventListener('mousemove', (e) => {
// status.textContent = `Mouse position: X: ${e.clientX}, Y: ${e.clientY}`;
// });

// keyInput.addEventListener('keyup', (e) => {
// console.log(`User typed: ${e.key} (Total Value: ${e.target.value})`);
// });

//practise 11
const form = document.querySelector('#regForm');
const username = document.querySelector('#username');
const usernameErr = document.querySelector('#usernameErr');
form.addEventListener('submit', (e) => {
e.preventDefault();
const val = username.value.trim();
if (val.length < 4) {
usernameErr.textContent = 'Username must be at least 4 characters long!';
username.style.borderColor = 'red';
} else {
usernameErr.textContent = '';
username.style.borderColor = 'green';
alert('Form submitted successfully!');
}
});