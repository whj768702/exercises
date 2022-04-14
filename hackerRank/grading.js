// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
  // Write your code here
  const length = grades.length;
  const newGrade = [];
  // for (let i = 0; i < length; i++) {
  //   if (grades[i] < 38) {
  //     newGrade.push(grades[i]);
  //   } else {
  //     const nextMultiple = Math.ceil(grades[i] / 5) * 5;
  //     if (nextMultiple - grades[i] < 3) {
  //       newGrade.push(nextMultiple);
  //     } else {
  //       newGrade.push(grades[i]);
  //     }
  //   }
  // }
  // return newGrade;
  return grades.map((val) => (val < 38 ? val : Math.ceil(val / 5) * 5 - val < 3 ? Math.ceil(val / 5) * 5 : val));
}
console.log(gradingStudents([73, 67, 38, 33]));
