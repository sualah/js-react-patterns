import { counter } from "./counter";

const button = document.getElementById("blue");
const counterText = document.getElementById("counter");

button.addEventListener("click", () => {
  console.log("Counter total: ", counter.increment());
  counterText.textContent = `Counter Value  is: ${counter.getCount()}`

});
