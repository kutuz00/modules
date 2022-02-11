const timer = document.querySelector(".timer-hide");
const dateCalc = document.querySelector(".date");

export const showTimer = () => {
  dateCalc.classList = "date-hide";
  timer.classList = "timer";
};

export const showDateCalc = () => {
  dateCalc.classList = "date";
  timer.classList = "timer-hide";
};
