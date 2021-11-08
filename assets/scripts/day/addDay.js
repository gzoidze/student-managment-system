import { days, tableBody } from "../app.js";
import { getFormatedDate } from "../dateFormat.js";
import { removeDayButton } from "./removeDay.js";
import { onGradeChange } from "../studentGrade/addNewGrade.js";
import {
  studentAavarage,
  allStudentAavarage,
} from "../studentGrade/avarage.js";
import { totalMissedLessons } from "../missedLessons.js";

export const addDayButton = document.getElementById("add-day");
let totalDays = document.getElementById("total-days");
totalDays.textContent = 0;
const currentDate = new Date();

export const updateDaysState = () => {
  if (days.length > 0) {
    removeDayButton.style.display = "block";
  } else {
    removeDayButton.style.display = "none";
  }
};

export const addDayhandler = () => {
  totalDays.textContent = tableBody.rows[0].cells.length - 1;

  const initialCellValue = 0;
  let table = tableBody;

  for (let h = 0; h < table.rows.length; h++) {
    let newTH = document.createElement("th");
    let newTD = document.createElement("td");
    if (table.rows[h].rowIndex === 0) {
      table.rows[h].appendChild(newTH);
    } else {
      table.rows[h].appendChild(newTD);
      table.classList.add("cell-background");
    }

    newTH.innerHTML = getFormatedDate(currentDate);
    newTD.innerHTML = initialCellValue;
  }
  currentDate.setDate(currentDate.getDate() + 1);
  days.push(table);
  let cellCount = table.rows[0].cells.length;
  const cells = document.querySelectorAll("td");

  cells.forEach((cell, index) => {
    if (index % cellCount && index % cellCount !== 1) {
      // cell.style.backgroundColor = "red";
      cell.addEventListener("click", onGradeChange.bind(null, cell));
    }
  });
  updateDaysState();
  studentAavarage();
  totalMissedLessons();
  allStudentAavarage();
};
