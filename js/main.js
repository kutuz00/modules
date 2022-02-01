import { showDateCalc, showTimer } from "./tabs.js";
import "./../node_modules/howler/dist/howler.core.min.js";
import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

const tabs = document.querySelector(".tab").getElementsByTagName("button");
const timer = document.querySelector(".timer-display");
const form = document.getElementById("timer");
let countDownId;

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);

  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate); // 3
    dateCalcResult.innerHTML = diffToHtml(diff); // 4
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    ); // 5
}
for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = (e) => {
    e.preventDefault();
    if ("Dates calc" === e.target.textContent) {
      showDateCalc();
    } else {
      showTimer();
    }
  };
}
const countDown = (inputTime) => {
  const timeLeft = inputTime - Date.now();
  if (timeLeft > 0) {
    timer.textContent = Math.floor(timeLeft / 1000);
  } else {
    clearInterval(countDownId);
    timer.textContent = "Finished";
    var sound = new Howl({
      src: ["./../src/mixkit-alarm-tone-996.wav"],
    });

    sound.play();
  }
};
const timerDisplay = (inputTime) => {
  countDownId = setInterval(() => {
    countDown(inputTime);
  }, 1000);
};
form.onsubmit = (event) => {
  event.preventDefault();
  const formInput = new FormData(event.target);
  const input = Date.now() + +formInput.get("timer") * 1000;
  timerDisplay(input);
};
form.onreset = (e) => {
  e.preventDefault();
  clearInterval(countDownId);
};
