function getRandomInt() {
  // 160 이상 500 이하
  return Math.floor(Math.random() * (500 - 160 + 1)) + 160;
}

const liArray = document.querySelectorAll('.randomize-width-li');
const randomWidths = new Array(5).fill(0).map(() => getRandomInt());
liArray.forEach((el, index) => {
  el.style.width = `${randomWidths[index]}px`;
});
