import { closeAddStudentModalHandler } from "../student/closeAddStudentModal.js";
import { clearUserInput } from "../clearInputs.js";
import { closeAddStudentGradeModal } from "../studentGrade/closeAddStudentGradeModal.js";

export const removeBackDrop = () => {
  closeAddStudentModalHandler();
  clearUserInput();
  closeAddStudentGradeModal();
};