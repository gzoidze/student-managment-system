import { openStudentGradeModal } from "./openAddStudentGradeModal.js";

export const onGradeChange = (cell) => {
  openStudentGradeModal(cell);

  // console.log("Row index: " + cell.closest('tr').rowIndex + " | Column index: " + cell.cellIndex);
};
