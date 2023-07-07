//1 task 
//first solution
const variable1=6;
const variable2=-3;
let result;
if (variable1 > 0 && variable2 > 0 || variable1 < 0 && variable2 < 0) { 
  result = variable1 * variable2; // якщо вони з однаковим знаком - то перемножити і вивести результат
} else if (variable1 < 0 && variable2 > 0 || variable1 > 0 && variable2 < 0) {
  result = variable1 / variable2; // якщо з різними знаками - то поділити і вивести результат
} else if (variable1 === 0 && variable2 !== 0) {
  result = variable2; // якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат
} else if (variable1 !== 0 && variable2 === 0) {
  result = variable1; // якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат
} else {
  result = NaN; // якщо обидва нулі - то покласти в результат NaN і вивести результат
}
console.log(result);

//1 task 
//second solution
if (variable1 > 0 && variable2 > 0 || variable1 < 0 && variable2 < 0) {
  result = variable1 * variable2; // якщо вони з однаковим знаком - то перемножити і вивести результат
} else if (variable1 < 0 && variable2 > 0 || variable1 > 0 && variable2 < 0) {
  result = variable1 / variable2; // якщо з різними знаками - то поділити і вивести результат
} else if (variable1 === 0 && variable2 === 0) {
  result = NaN; // якщо обидва нулі - то покласти в результат NaN і вивести результат.
} else {
  if (variable1 === 0 && variable2 !== 0) {
    result = variable2; // якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат
} else if (variable1 !== 0 && variable2 === 0) {
  result = variable1; // якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат
}
}
console.log(result);

//1 task
//third solution

if (variable1 === 0 && variable2 === 0) {
  result = NaN; // якщо обидва нулі - то покласти в результат NaN і вивести результат.
} else if (variable1 === 0 || variable2 === 0) {
  result = variable1 || variable2; // якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат
} else if (variable1 > 0 && variable2 > 0 || variable1 < 0 && variable2 < 0) {
  result = variable1 * variable2; // якщо вони з однаковим знаком - то перемножити і вивести результат
} else {
  result = variable1 / variable2; // якщо з різними знаками - то поділити і вивести результат
}
console.log(result);

//2 task
const number = 28;
const number2 = 4;
const number3 = 7;
if (number <= 0 || number%2!==0 || number%number2!==0 || number%number3!==0) {
  console.log('lose');
} else {
  console.log('win');
}
