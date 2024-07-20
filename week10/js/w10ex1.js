// Function Declaration

function greeting1(){
    console.log("Hello");
}

greeting1();

function greeting2(){
    return "Hello";
}

let str = greeting2();

console.log(str);
console.log(greeting2());

function greeting3(name){
    // return "Hello " + name;
    return `Hello ${name}`;
    
}

console.log(greeting3("Your Ghastliness."));
console.log(greeting3(5));
console.log(greeting3());


// "Hello", 'Hello', and `Hello` all work as strings
// `Uptick` version of strings allows you to insert variables with
// ${variable} without concatenation

function greeting4(name = "How Dare You"){
    return `Hello ${name}`;
}

console.log(greeting4());
console.log(greeting4("Your Ugliness"));

function sum(num1 = 0, num2 = 0){
    return num1 + num2;
}

console.log(sum(3, 5));
console.log(sum("3", "5"));
console.log(sum("Hello ", "Your Surliness"));
console.log(sum(3));
console.log(sum(3, 5, 9));
console.log(sum());


// Function Expression
let m = sum();

console.log(m);
console.log(typeof(m));

// Assigns 'f' to be the function 'sum'
let f = sum;
console.log(typeof(f));
console.log(f(6, 10));

// Changes the value of 'f', no longer making it a function
f = 9;
// console.log(f(6, 10)); doesn't work anymore

// Ensures the function f2 can't be changed; Constant
const f2 = function(){
    return "Good for you."
};

console.log(f2());


// Arrow Expression
// Simplifies functions
const f3 = ()=> "Wow, I'm so impressed.";

console.log(f3());


const sum2 = function(num1 = 0, num2 = 0){
    return num1 + num2;
};


const sum3 = (num1 = 0, num2 = 0) => num1 + num2;

console.log(sum2(2, 3));
console.log(sum3(2, 3));

// var a = prompt("Enter first number");
// var b = prompt("Enter second number");
// var result = a + b;
// console.log(`The result is ${result}`);

// var c = prompt("Enter first number");
// var d = prompt("Enter second number");
// c = parseFloat(c);
// d = parseFloat(d);
// var result = c + d;
// console.log(`The result is ${result}`);

console.log(isNaN('123'));
console.log(isNaN(123));
console.log(isNaN("123 456"));


console.log(Math.max(7, 22, -1, 45, 8));
console.log(Math.round(8.5596));

// Returns a random integer between min (included) and max (included)
let min = 1;
let max = 5;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

var myString = "WEB 222";
var myArray2 = myString.split('2');

myArray2[0] // element 0 returns "WEB "
myArray2[1] // element 1 returns "" (empty string)
myArray2[2] // element 2 returns "" (empty string)
myArray2[3] // element 3 returns "" (empty string)

var myArray3 = myString.split('22'); // split on 22 will return the following:
myArray3[0] // element 0 returns "WEB "
myArray3[1] // element 1 returns "2"


var arrayName1 = [11, 15, 13, "blue", 24, 35.05] ;
var arrayName2 = []; // an empty array

var i, len;
var colors = ["Red", "Green", "Blue", "Yellow", "White"];
for (i = 0, len = colors.length; i < len; i++) {
 console.log(i + ": " + colors[i]);
}


function myFunction(item, index) {
    console.log(index + ": " + item);
   }
   var colors = ["Red", "Green", "Blue", "Yellow", "White"];
   colors.forEach(myFunction);