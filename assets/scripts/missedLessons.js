import { tableBody } from "./app.js";

let mLessons = document.getElementById("missed-lessons");
mLessons.textContent = 0;
export let missedLesson = [];

export const totalMissedLessons = () => {
  if (tableBody.rows.length < 2 || tableBody.rows[0].cells.length < 3) {
    mLessons.textContent = 0;
  } else {
    for (let i = 1, row; (row = tableBody.rows[i]); i++) {
      for (let j = 2, col; (col = row.cells[j]); j++) {
        if (col.textContent === "0") {
          missedLesson.push(col);
        }
        mLessons.textContent = missedLesson.length;
      }
    }
  }
  missedLesson.length = 0;
};
