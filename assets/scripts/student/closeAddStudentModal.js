import { toggleBackDropModal } from "../backdrop/toggleBackDropModal.js";

export const addStudentModal = document.getElementById("add-student-modal");

export const closeAddStudentModalHandler = () => {
  addStudentModal.classList.remove("visible");
  toggleBackDropModal();
};
