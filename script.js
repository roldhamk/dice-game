const image = document.getElementsByClassName("image");
const button = document.getElementById("roll-btn");
const number = document.getElementById("number");

button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 6 + 1);
  if (num === 1) {
    number.innerText = "You lose!";
  }
});
