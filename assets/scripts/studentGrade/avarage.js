import { tableBody } from "../app.js";

let avarageGrade = document.getElementById("total-avarage");
avarageGrade.textContent = 0;

export const studentAavarage = () => {
  [...tableBody.rows].forEach((row, index) => {
    if (index) {
      let sum = 0;
      [...row.cells].forEach((cell, index) => {
        if (index > 1) {
          sum += +cell.textContent;
        }
      });
      if (row.cells.length > 2) {
        const avarage = sum / (row.cells.length - 2);
        row.cells[1].textContent = avarage.toFixed(1);
      } else {
        row.cells[1].textContent = 0;
      }
    }
  });
};

export const allStudentAavarage = () => {
  let sum = 0;
  [...tableBody.rows].forEach((row, index) => {
    if (index) {
      [...row.cells].forEach((cell, index) => {
        if (index === 1) {
          sum += +cell.textContent;
        }
      });
    }
  });
  if (tableBody.rows.length > 1) {
    const totalAvarage = sum / (tableBody.rows.length - 1);
    avarageGrade.textContent = totalAvarage.toFixed(1);
  } else {
    avarageGrade.textContent = 0;
  }
};
