const addStudentButton = document.getElementById('add-student');
const backDrop = document.getElementById('backdrop');
const addStudentModal = document.getElementById('add-student-modal');
const addStudentGradeModal = document.getElementById('add-grade-modal');
const btnPassive = addStudentModal.querySelector('.btn-passive');
const btnSuccess = addStudentModal.querySelector('.btn-success');
const btnPassiveGrade =
  addStudentGradeModal.querySelector('.btn-passive-grade');
const btnSuccessGrade =
  addStudentGradeModal.querySelector('.btn-success-grade');
// const table = document.querySelector('table');
const tableHead = document.getElementById('table-head');
const tableBody = document.querySelector('tbody');
let totalStudents = document.getElementById('total-students');
let totalDays = document.getElementById('total-days');
let missedLessons = document.getElementById('missed-lessons');
totalStudents.textContent = 0;
totalDays.textContent = 0;
missedLessons.textContent = 0;
const students = [];
const days = [];

const removeStudents = document.querySelector('.remove-student');
const removeDays = document.querySelector('.remove-day');
const addDayButton = document.getElementById('add-day');

const currentDate = new Date();

const clearUserInput = () => {
  const studentName = document.getElementById('student-name');
  const studentGrade = document.getElementById('student-grade');
  studentName.value = '';
  studentGrade.value = '';
};

const toggleBackDropModal = () => {
  backDrop.classList.toggle('visible');
};

const removeBackDrop = () => {
  closeAddStudentHandler();
  clearUserInput();
  closeAddStudentGrade();
};

const addStudentHandler = () => {
  addStudentModal.classList.add('visible');
  toggleBackDropModal();
};

const closeAddStudentHandler = () => {
  addStudentModal.classList.remove('visible');
  toggleBackDropModal();
};

const addStudentGrade = () => {
  addStudentGradeModal.classList.add('visible');
  toggleBackDropModal();
};

const closeAddStudentGrade = () => {
  addStudentGradeModal.classList.remove('visible');
};

const updateStudentsState = () => {
  totalStudents.textContent = students.length;

  if (students.length > 0) {
    removeStudents.style.display = 'block';
  } else {
    removeStudents.style.display = 'none';
  }
};

const updateDaysState = () => {
  if (days.length > 0) {
    removeDays.style.display = 'block';
  } else {
    removeDays.style.display = 'none';
  }
};

const addNewStudent = () => {
  const studentName = document.getElementById('student-name').value;
  const initialCellValue = 0;

  if (studentName.trim()) {
    let table = tableBody;
    let rowCount = table.rows.length;
    let cellCount = table.rows[0].cells.length;
    let row = table.insertRow(rowCount);
    for (let i = 0; i <= cellCount - 1; i++) {
      let cell = row.insertCell(i);
      cell.textContent = initialCellValue;
      cell.classList.add('gray');
      cell.parentNode.firstChild.innerText = studentName;
      cell.parentNode.firstChild.style.backgroundColor = 'darkslategray';
      cell.parentNode.firstChild.style.textAlign = 'left';
    }
    students.push(studentName);
    updateStudentsState();
    closeAddStudentHandler();
    clearUserInput();
  } else {
    alert('please enter valid value.');
  }
};

const removeStudentsHandler = () => {
  tableBody.deleteRow(tableBody.rows.length - 1);
  students.pop();
  updateStudentsState();
};

const addDayhandler = () => {
  totalDays.textContent = tableBody.rows[0].cells.length - 1;

  const initialCellValue = 0;
  let tblHeadObj = tableBody;

  for (var h = 0; h < tblHeadObj.rows.length; h++) {
    var newTH = document.createElement('th');
    var newTD = document.createElement('td');
    if (tblHeadObj.rows[h].rowIndex === 0) {
      tblHeadObj.rows[h].appendChild(newTH);
    } else {
      tblHeadObj.rows[h].appendChild(newTD);
      tblHeadObj.classList.add('gray');
    }

    newTH.innerHTML = getFormatedDate(currentDate);
    newTD.innerHTML = initialCellValue;
    currentDate.setDate(currentDate.getDate() + 1);
  }
  days.push(tblHeadObj);
  updateDaysState();
};

const removeDayhandler = () => {
  totalDays.textContent = tableBody.rows[0].cells.length - 3;
  var allRows = tableBody.rows;
  for (var i = 0; i < allRows.length; i++) {
    allRows[i].deleteCell(-1);
  }
  days.pop();
  updateDaysState();
};

const getFormatedDate = (date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var curr_date = date.getDate();
  var curr_month = date.getMonth();
  var curr_day = date.getDay();
  return curr_date + '-' + months[curr_month] + '-' + days[curr_day];
};

const addnewGrade = (event) => {
  let studentGrade = parseInt(document.getElementById('student-grade').value);
  if (studentGrade < 1 || studentGrade > 5) {
    alert('Please enter grade between 1 and 5');
  } else {
    closeAddStudentGrade();
    removeBackDrop();

  }
};

tableBody.addEventListener('click', (event) => {
  const studentGrade = parseInt(document.getElementById('student-grade').value);
  console.log(event.target.tagName);
  if (event.target.tagName === 'TD') {
    addStudentGrade();
  } else {
    return;
  }
});

addStudentButton.addEventListener('click', addStudentHandler);
btnPassive.addEventListener('click', removeBackDrop);
backDrop.addEventListener('click', removeBackDrop);
btnSuccess.addEventListener('click', addNewStudent);
removeStudents.addEventListener('click', removeStudentsHandler);
addDayButton.addEventListener('click', addDayhandler);
removeDays.addEventListener('click', removeDayhandler);
btnSuccessGrade.addEventListener('click', addnewGrade);
btnPassiveGrade.addEventListener('click', removeBackDrop)
