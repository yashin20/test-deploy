let currentNumber = 15;
const min = 0;
const max = 30;

function changeNumber(amount) {
  const newNumber = currentNumber + amount;
  if (newNumber >= min && newNumber <= max) {
    currentNumber = newNumber;
    document.getElementById("number").innerText = currentNumber;
  }
}