const button = document.getElementById("roll-btn");
const number = document.getElementById("number");
const image = document.getElementById("dice");

let sum = 0;

button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 6 + 1);
  sum += num;
  button.innerText = "Roll";
  number.innerText = sum;
  image.style.display = "block";
  image.src = `./img/dice${num}.png`;
  if (sum >= 20) {
    number.innerText = `you win!`;
    button.innerText = "Play again";
    sum = 0;
  } else if (num === 1) {
    number.innerText = `you lost!`;
    sum = 0;
    button.innerText = "Restart Game";
  }
});
