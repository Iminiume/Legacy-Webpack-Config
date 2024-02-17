// this js file container const and arrow function which are not support in old browsers

// import styles entry if you do not want to export and transpile your css entry file
// into a seperate ( .js ) file
import "./styles-entry.css";

const CountButton = document.querySelector("button");
const CountText = document.querySelector("#count-text");
let count = 0;
CountText.textContent = count;

CountButton.addEventListener("click", () => {
  count += 1;
  CountText.textContent = count;
});
