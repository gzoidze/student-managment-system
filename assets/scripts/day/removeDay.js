import { updateDaysState } from "./addDay.js";
import { days, tableBody } from "../app.js";
import { totalMissedLessons } from "../missedLessons.js";
import { studentAavarage, allStudentAavarage } from "../studentGrade/avarage.js";

let totalDays = document.getElementById("total-days");
export const removeDayButton = document.querySelector(".remove-day");

export const removeDayhandler = () => {
  totalDays.textContent = tableBody.rows[0].cells.length - 3;
  let allRows = tableBody.rows;
  for (let i = 0; i < allRows.length; i++) {
    allRows[i].deleteCell(-1);
  }
  days.pop();
  updateDaysState();
  studentAavarage();
  totalMissedLessons();
  allStudentAavarage();
};
