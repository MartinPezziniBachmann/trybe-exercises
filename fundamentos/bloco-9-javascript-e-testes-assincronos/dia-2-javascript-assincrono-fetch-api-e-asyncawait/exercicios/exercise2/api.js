const API_URL = 'https://api.coincap.io/v2/assets';

let coinsData;
const coinsCont = document.getElementById('coinsContainer');

const refreshText = () => {
  for (let index = 0; index < 10; index += 1) {
    const listEl = document.createElement('li');
    listEl.innerText = `${coinsData[index].id} ${coinsData[index].symbol}: ${coinsData[index].priceUsd}`;
    coinsCont.appendChild(listEl);
  }
}

const fetchCoins = () => {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      coinsData = data.data;
      refreshText();
    });
};

window.onload = () => fetchCoins();