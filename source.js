
var numbersArray = [];

for (var i = 1; i <= 52; i++) {
    numbersArray.push(i);
}
const numbersContainer = document.getElementById('numbersContainer');
const toggleBtn = document.querySelector('button');
 
function getRandomNumbers(array, count) {
const randomNumbers = [];
 
while (randomNumbers.length < count && array.length > 0) {
     const randomIndex = Math.floor(Math.random() * array.length);
     const randomNumber = array.splice(randomIndex, 1)[0];
     randomNumbers.push(randomNumber);
}
return randomNumbers;
}
function displayRandomNumbers() {
const numbersToShow = getRandomNumbers(numbersArray, 5);
numbersContainer.innerHTML = numbersToShow.join(', ');
}
function toggleDisplay() {
   if (numbersArray.length === 0) {
}
displayRandomNumbers();
}
displayRandomNumbers();
 