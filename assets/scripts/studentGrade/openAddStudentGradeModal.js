import { toggleBackDropModal } from "../backdrop/toggleBackDropModal.js";
import { closeAddStudentGradeModal } from "./closeAddStudentGradeModal.js";
import { removeBackDrop } from "../backdrop/removeBackDrop.js";
import { studentAavarage, allStudentAavarage } from "./avarage.js";
import { totalMissedLessons } from "../missedLessons.js";

const addStudentGradeModal = document.getElementById("add-grade-modal");

const btnPassiveGrade =
  addStudentGradeModal.querySelector(".btn-passive-grade");
const btnSuccessGrade =
  addStudentGradeModal.querySelector(".btn-success-grade");

let cell = null;

export const openStudentGradeModal = (c) => {
  addStudentGradeModal.classList.add("visible");
  toggleBackDropModal();
  cell = c;
};

export const addnewGrade = () => {
  let studentGrade = document.getElementById("student-grade").value;
  if (studentGrade.trim() < 1 || studentGrade.trim() > 5) {
    alert("Please enter grade between 1 and 5");
  } else {
    cell.textContent = studentGrade;
    switch (cell.textContent) {
      case "1":
        cell.style.backgroundColor = "#e5ff00";
        break;
      case "2":
        cell.style.backgroundColor = "#e5ff00";
        break;
      case "3":
        cell.style.backgroundColor = "#9dff00";
        break;
      case "4":
        cell.style.backgroundColor = "#59ff00";
        break;
      case "5":
        cell.style.backgroundColor = "#00ff1a";
        break;
      default:
        break;
    }
    closeAddStudentGradeModal();
    removeBackDrop();
    studentAavarage();
    totalMissedLessons();
    allStudentAavarage();
  }
};

btnSuccessGrade.addEventListener("click", addnewGrade);
btnPassiveGrade.addEventListener("click", removeBackDrop);
