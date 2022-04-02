const eventButton = document.querySelector('.event-button');
const clickCounter = document.querySelector('.click-counter');
let clickCount = 0;

eventButton.addEventListener('click', () => {
  clickCount += 1;
  clickCounter.innerText = clickCount;
})