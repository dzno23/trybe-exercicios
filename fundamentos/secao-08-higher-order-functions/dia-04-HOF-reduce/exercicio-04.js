const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (students, grades) => {
  return students.map((person, index) => ({ name: person, average: (grades[index].reduce((acc, crr) => acc + crr) / grades[index].length)}));
};

console.log(studentAverage(students, grades));