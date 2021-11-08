import { updateStudentsState } from "./addStudent.js";
import { students, tableBody } from "../app.js";
import { totalMissedLessons } from "../missedLessons.js";
import { studentAavarage, allStudentAavarage } from "../studentGrade/avarage.js";

export const removeStudentsHandler = () => {
  tableBody.deleteRow(tableBody.rows.length - 1);
  students.pop();
  updateStudentsState();
  studentAavarage();
  totalMissedLessons();
  allStudentAavarage();
};
