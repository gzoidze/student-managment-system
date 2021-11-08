import { closeAddStudentModalHandler } from "./closeAddStudentModal.js";
import { clearUserInput } from "../clearInputs.js";
import { students, tableBody } from "../app.js";
import { onGradeChange } from "../studentGrade/addNewGrade.js";
import { totalMissedLessons } from "../missedLessons.js";
import {allStudentAavarage, studentAavarage} from "../studentGrade/avarage.js"

let totalStudents = document.getElementById("total-students");
totalStudents.textContent = 0;

export const removeStudents = document.querySelector(".remove-student");

export const updateStudentsState = () => {
  totalStudents.textContent = students.length;

  if (students.length > 0) {
    removeStudents.style.display = "block";
  } else {
    removeStudents.style.display = "none";
  }
};

export const addNewStudent = () => {
  const studentName = document.getElementById("student-name").value;
  const initialCellValue = 0;
  let table = tableBody;
  let cellCount = table.rows[0].cells.length;

  if (studentName.trim()) {
    let rowCount = table.rows.length;
    let row = table.insertRow(rowCount);
    for (let i = 0; i <= cellCount - 1; i++) {
      let cell = row.insertCell(i);
      cell.textContent = initialCellValue;
      cell.classList.add("cell-background");
      cell.parentNode.firstChild.innerText = studentName;
      cell.parentNode.firstChild.classList.add("student-column");
    }
    students.push(studentName);
    const cells = document.querySelectorAll("td");

    cells.forEach((cell, index) => {
      if (index % cellCount && index % cellCount !== 1) {
        // cell.style.backgroundColor = "red";
        cell.addEventListener("click", onGradeChange.bind(null, cell));
      }
    });

    updateStudentsState();
    closeAddStudentModalHandler();
    clearUserInput();
    studentAavarage()
    totalMissedLessons();
    allStudentAavarage();
  } else {
    alert("please enter valid value.");
  }
};
