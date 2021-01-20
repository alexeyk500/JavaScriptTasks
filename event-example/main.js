let countDisplay    = document.querySelector('.count_display');
let incrementButton = document.querySelector('.increment-button');
let decrementButton = document.querySelector('.decrement-button');
let resetButton     = document.querySelector('.reset-button');

function incrementCount() {
  let curentCount = parseInt(countDisplay.textContent);
  countDisplay.textContent = curentCount + 1;
}

function decrementCount() {
  let curentCount = parseInt(countDisplay.textContent);
  countDisplay.textContent = curentCount - 1;
}

function reset() {
  let curentCount = 0;
  countDisplay.textContent = 0;
}

incrementButton.addEventListener('click', incrementCount);
decrementButton.addEventListener('click', decrementCount);
resetButton.addEventListener('click', reset);
