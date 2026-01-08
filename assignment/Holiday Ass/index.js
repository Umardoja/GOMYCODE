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
const listNum = [50, 400, 200, 12, 98, 59]
function largeNum(numArr) {
    let large = numArr[0];
    for (item of numArr){
      if (item > large){
        large = item;
      }
    } 
    console.log(`Largest number is ${large}`);
}
largeNum(listNum)

console.log(largeNum(12, 23, 45, 21)); 

// 5

function vowelCount(str){
    let vowels = "aeiou";
    let count = 0;

    for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("Hello World"));

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

function checkPalin(str) {
  let orgWord = str.toLowerCase();
  let revWord = orgWord.split("").reverse().join("");

  if (orgWord === revWord){
    console.log(`${orgWord} is a Palindrome`);
  } else {
    console.log(`${orgWord} is not a Palindrome`);
  }

console.log(checkPalin("hello"));
console.log(checkPalin("eyes"));

// 11

function averageScore(scores) {
  let total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

console.log(averageScore([23, 35, 58, 76, 24]))

// 12

for (let fizz = 1; fizz <= 100; fizz++) {
  if (fizz % 15 === 0) console.log("FizzBuzz");
  else if (fizz % 3 === 0) console.log("Fizz");
  else if (fizz % 5 === 0) console.log("Buzz");
  else console.log(fizz);
}


// 13

function countProp(obj) {
  return Object.keys(obj).length;
}

console.log(countProp({ myName: "Umar", age: 21, range: 95 }));

// 14

function capWords(sent) {
  return sent
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capWords("when is the lecture starting"))

// 15

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "This Cannot be divided by zero";
    default:
      return "Incorrect Operator Sign";
  }
}

console.log(calculator(12,20,"*"))

// 16

function guessingGame(guess) {
  let randNum = Math.floor(Math.random() * 10) + 1;
  return guess === randNum
    ? "Correct Answer! "
    : `Wrong! The number was ${randNum}`;
}

console.log(guessingGame(4));


// 17 

function wordFrequency(sent) {
  let words = sent.toLowerCase().split(" ");
  let count = {};

  for (let word of words) {
    count[word] = (count[word] || 0) + 1;
  }
  return count;
}

console.log(wordFrequency("i am studying at GOMYCODE i am also on break"));


// 18

function passStudent(students) {
  return students.filter(student => student.score > 50);
}
const students = [
  { name: "Umar", score: 35 },
  { name: "Cosmos", score: 65 },
  { name: "Teddy", score: 45 }
];

console.log(passStudent(students));

// 19

let todo = [];

function addTask(task) {
  todo.push(task);
}

function removeTask(task) {
  todo = todo.filter(t => t !== task);
}

function listTasks() {
  return todo;
}

addTask("I should Learn JavaScript");
addTask("Take time to practice");
removeTask("Take time to practice");

console.log(listTasks());

}

//20

function redundant(str) {
  return function () {
    return str;
  };
}


const f1 = redundant("apple");
console.log(f1()); 

const f2 = redundant("pear");
console.log(f2()); 

const f3 = redundant("");
console.log(f3()); 

//21

function sevenBoom(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (String(arr[i]).includes("7")) {
      return "Boom!";
    }
  }
  return "There is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); 
console.log(sevenBoom([8, 6, 33, 100])); 
console.log(sevenBoom([2, 55, 60, 97, 86])); 

//22

function addition(num) {
  return num + 1;
}

console.log(addition(0));
console.log(addition(9));
console.log(addition(-3));

//23

function triArea(base, height) {
  return (base * height) / 2;
}
console.log(triArea(3, 2));
console.log(triArea(7, 4));
console.log(triArea(10, 10));




