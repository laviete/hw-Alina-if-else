//1 task 
//first variant
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
//second variant
const a = 10;
const b = 2;
let res;
if (a > 0 && b > 0 || a < 0 && b < 0) {
  res = a * b; // якщо вони з однаковим знаком - то перемножити і вивести результат
} else if (a < 0 && b > 0 || a > 0 && b < 0) {
  res = a / b; // якщо з різними знаками - то поділити і вивести результат
} else if (a === 0 && b === 0) {
  res = NaN; // якщо обидва нулі - то покласти в результат NaN і вивести результат.
} else {
  if (a === 0 && b !== 0) {
  res = b; // якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат
} else if (a !== 0 && b === 0) {
  res = a; // якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат
}
}
console.log(res);

//1 task
//third variant
const x = 0;
const y = 0;
let resultat;
if (x === 0 && y === 0) {
  resultat = NaN; // якщо обидва нулі - то покласти в результат NaN і вивести результат.
} else if (x === 0 || y === 0) {
  resultat = x || y; // якщо одне зі значень 0 - то покласти в результат значення іншої змінної і вивести результат
} else if (x > 0 && y > 0 || x < 0 && y < 0) {
  resultat = x * y; // якщо вони з однаковим знаком - то перемножити і вивести результат
} else {
  resultat = x / y; // якщо з різними знаками - то поділити і вивести результат
}
console.log(resultat);

//2 task
const number = 28;
if (number <= 0 || number%2!==0 || number%4!==0 && number%7!==0) {
  console.log('lose');
} else {
  console.log('win');
}
