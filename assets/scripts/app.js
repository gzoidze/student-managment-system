import { backDrop } from "./backdrop/toggleBackDropModal.js";
import {
  openAddStudentModalHandler,
  addStudentModal,
} from "./student/openAddStudentModal.js";
import { addNewStudent, removeStudents } from "./student/addStudent.js";
import { removeStudentsHandler } from "./student/removeStudent.js";
import { removeBackDrop } from "./backdrop/removeBackDrop.js";
import { addDayhandler, addDayButton } from "./day/addDay.js";
import { removeDayhandler, removeDayButton } from "./day/removeDay.js";

const openAddStudentModalButton = document.getElementById("add-student");
const btnPassive = addStudentModal.querySelector(".btn-passive");
const btnSuccess = addStudentModal.querySelector(".btn-success");
export const tableBody = document.querySelector("tbody");
export const students = [];
export const days = [];

export const addStudentGradeModal = document.getElementById("add-grade-modal");




openAddStudentModalButton.addEventListener("click", openAddStudentModalHandler);
btnPassive.addEventListener("click", removeBackDrop);
backDrop.addEventListener("click", removeBackDrop);
btnSuccess.addEventListener("click", addNewStudent);
removeStudents.addEventListener("click", removeStudentsHandler);
addDayButton.addEventListener("click", addDayhandler);
removeDayButton.addEventListener("click", removeDayhandler);
