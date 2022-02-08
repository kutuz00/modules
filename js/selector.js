import { showDateCalc, showTimer } from "./tabs.js";

export const iterator = (element) => {
  for (let i = 0; i < element.length; i++) {
    element[i].onclick = (e) => {
      e.preventDefault();
      switch (e.target.innerText) {
        case "Dates calc":
          showDateCalc();
          break;

        case "Timer":
          showTimer();
          break;
      }
    };
  }
};
