const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  const gradedStudents = students.map((element, index) => {
    return { 
      name: element,
      average: grades[index].reduce((acc, grade) => acc + grade, 0) / grades[index].length
    }
  })
  return gradedStudents;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(expected);
console.log(studentAverage());