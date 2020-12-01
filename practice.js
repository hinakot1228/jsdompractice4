// 1
let basketball = document.createElement('li');
basketball.textContent = 'バスケ';

let sports = document.getElementById('sports');
sports.appendChild(basketball);

// 2
let apple = document.createElement('li');
apple.textContent = "リンゴ";

let fruits = document.getElementById('fruits');
fruits.insertBefore(apple, fruits.firstChild);

// 3
document.getElementById('chicken').remove();

// 4
let insect = document.getElementById('insect');
let cockroach = document.getElementById('cockroach');
insect.removeChild(cockroach);