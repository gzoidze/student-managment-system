import { toggleBackDropModal } from "../backdrop/toggleBackDropModal.js";

export const addStudentModal = document.getElementById("add-student-modal");

export const openAddStudentModalHandler = () => {
  addStudentModal.classList.add("visible");
  toggleBackDropModal();
};
