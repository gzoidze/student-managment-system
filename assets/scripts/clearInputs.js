const studentName = document.getElementById("student-name");
const studentGrade = document.getElementById("student-grade");

export const clearUserInput = () => {
  studentName.value = "";
  studentGrade.value = "";
};
