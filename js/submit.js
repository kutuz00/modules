import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError as printError } from "./utils.js";
import "./../node_modules/howler/dist/howler.core.min.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const form = document.getElementById("timer");
const tabs = document.getElementsByTagName("button");
const timer = document.querySelector(".timer-display");

let countDownId;

dateCalcForm.onsubmit = (event) => {
  dateCalcResult.innerHTML = "";
  event.preventDefault();
  console.log(event);
  const formData = new FormData(event.target);

  const firstDate = formData.get("firstDate");
  const secondDate = formData.get("secondDate");

  if (!firstDate || !secondDate) {
    dateCalcResult.innerHTML = printError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
  } else {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  }
};

form.onsubmit = (event) => {
  event.preventDefault();
  const formInput = new FormData(event.target);
  const input = Date.now() + +formInput.get("timer") * 1000;
  timerDisplay(input);
};

const timerDisplay = (inputTime) => {
  countDownId = setInterval(() => {
    countDown(inputTime);
  }, 1000);
};

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

form.onreset = (e) => {
  e.preventDefault();
  clearInterval(countDownId);
};
