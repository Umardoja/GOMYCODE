// BREAK PROJECT


// 1

function sum(num1, num2){
    return num1+num2;
}

console.log(sum(4, 5))

// 2

function checkNum(num){
    if (num % 2 === 0) {
        console.log("Given number is Even")
    }
    else 
        console.log("Given Number is Odd")
}

checkNum(81)

// 3

function revString(string){
    return string.split("").reverse().join("");
}

console.log(revString("How are u doing"))

// 4

function largeNum() {
    let max = arguments[0]; 
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(largeNum(12, 23, 45, 21)); 

// 5

function vowelCount(string){
    let vowels = "aeiou";
    let count = 0;

    for ()

}

// 6

function multiplyTbl(num) {
    let value = 1; 
    while (value <= 12) {
        console.log(`${num} x ${value} = ${num * value}`);
        value++;
    }
}

multiplyTbl(6);

// 7

function celToFahr(celsius) {
  return (celsius * 1.8) + 32;
}
console.log(celToFahr(400))

// 8

function rmDouble(dub){
    return [...new Set(dub)]
}

console.log(rmDouble([34, 23, 12, 23, 24, 34]))

// 9

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 10

function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// 11

function averageScore(scores) {
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// 12

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// 13

function countProperties(obj) {
  return Object.keys(obj).length;
}

// 14

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// 15

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}

// 16

function guessingGame(guess) {
  let random = Math.floor(Math.random() * 10) + 1;
  return guess === random
    ? "Correct! 🎉"
    : `Wrong! The number was ${random}`;
}


// 17 

function wordFrequency(sentence) {
  let words = sentence.toLowerCase().split(" ");
  let count = {};

  for (let word of words) {
    count[word] = (count[word] || 0) + 1;
  }
  return count;
}

// 18

function passingStudents(students) {
  return students.filter(student => student.score > 50);
}

// 19

let todos = [];

function addTask(task) {
  todos.push(task);
}

function removeTask(task) {
  todos = todos.filter(t => t !== task);
}

function listTasks() {
  return todos;
}


