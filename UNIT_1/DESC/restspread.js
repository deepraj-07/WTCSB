// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(1,2,3)); // 6

// function add(numbers){
//     let total = 0;
//     for(let i=0; i<numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }

// // using rest operator  
// function addAll(...numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }
//     return sum;
// }
// console.log(addAll(1,2,3,4,5)); // 15   

// let a = [1, 2, 3, 34, 45, 88];
// let [first, sec, last] = a;
// console.log(first, sec, last);

// let [first, sec, ...rest] = a;
// let last = rest[rest.length - 1];

// console.log(first, sec, last);



//Q1. Write an arrow function isEven(num) that takes a number as input and returns "Even" if the number is even, otherwise returns "Odd".
// const isEven = (num) => {
//     return num % 2 === 0 ? "Even" : "Odd";
// };
// console.log(isEven(4)); // Even
// console.log(isEven(7)); // Odd


//Q2. Arrow Function to Reverse a String
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
console.log(reverseString("DEEP RAJ")); // olleh



//Q3. Arrow Function to Compute Average Marks
// const averageMarks = (marks) => {
//     const sum = marks.reduce((total, m) => total + m, 0);
//     const avg = sum / marks.length;
//     return avg >= 40 ? "PASS" : "FAIL";
// };
// console.log(averageMarks([35, 40, 50])); // PASS
// console.log(averageMarks([20, 30, 35])); // FAIL
