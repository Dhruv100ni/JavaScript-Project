console.log('hello');
// alert('hello this is dhruv');

// How to write a comment inline 

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// Manipulate DOM with javascript
/* ... It's just a fancy way of saying .
    change HTML with javascript */


// var age = prompt('What is you age :)');
// document.getElementById('someText').innerHTML = age;

// Numbers in javascript

var num1 = 10;
// num1 = num1+1;

// Increment num1 by 1
num1++;
console.log(num1);

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1%6);

// Increment/Decrement by any number you want
num1 += 10;
console.log(num1);

/* function
1. Create a function
2. Call a function
*/

// Create
function fun() {
    console.log('this is a function');
}

// Call
fun();

/* Let's create a function that take 
    in a name and says hello follwed bby your name 

    For eg.

    Name = "Dhruv"
    Return = "Hello Dhruv"
*/

// var name = prompt('What is your name : ');
/*
function greeting(yourName){
    
    var result = 'Hello' +' ' + yourName; // String concatination
    console.log(result);
}

var name = prompt("What is your name?");
greeting(name);
*/


// How do argument work in function 
//  How do we add two number together in a function

function sumNumbers(a, b) {
    var result = a+b;
    console.log(a+b);
}
sumNumbers("Hello ","Dhruv");

 
// While loops

/*
var num = 0;
while(num < 100){
    num += 1;
    console.log(num);
}
*/

//  for loop 
for(let num = 0; num < 100; num++){     //let = var (both are same)
    console.log(num);
}   

// Data types
var yourAge = 18; //Number
let youName = "Dhruv"; //String
let name = {first: "Dhruv", last:"Soni"}; //object
let truth = false; // boolean
let groceries = ["apple", "banana", "oranges"]; //array
let random; //undefined
let nothing = null; // vale null

// Strings in javascript (common methods)
let fruit = "banana,apple,orange,blackberry";
let moreFruits = "banana\napples"; // new line
console.log(moreFruits);
console.log(fruit.length);  //print length of string
console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2,6));
console.log(fruit.replace("ban","123"));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by characters
console.log(fruit.split(''));  //split by coma

//Array
let fruits = ["banana","apple","orange","pineapple"];
fruits = new Array ("banana","apple","orange","pineapple");

console.log(fruits[2]); // access value at index 2nd

fruits[0] = "pear";
console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// array commaom methods
console.log("to string", fruits.toString());
console.log(fruits.join(" *-* "));
// console.log(fruits, fruits.pop(), fruits);
console.log(fruits.pop(), fruits);  //removes last item
console.log(fruits.push("blackberry"), fruits); //appends
console.log(fruits[4]);
fruits[4] = "new fruit";
console.log(fruits);
fruits.shift(); // remove first element from a list
console.log(fruits);
fruits.unshift("kiwi"); // add first element to an array
console.log(fruits);

let vegetables = ["onions","tomato","broccoli"];
let allGrocieries = fruits.concat(vegetables); //combine array
console.log(allGrocieries);
console.log(allGrocieries.slice(1,4));
console.log(allGrocieries.reverse());
console.log(allGrocieries.sort());

let someNumbers = [5,8,2,1,3,9,7,10];
console.log(someNumbers.sort(function(a,b){ return a-b})); //sorted in ascending order
console.log(someNumbers.sort(function(a,b){ return b-a})); //sorted in descending order

let emptyArray = new Array();
for (let num = 0; num<=10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

// Objects in Java Scripts
// Dictionaries in python

let student = {
    first : "Dhruv", 
    last: "Soni", 
    age:18, 
    height: 172,
    studentInfo: function () {
        return this.first + "\n" + this.last + "\n" + this.age;
    }
};
// console.log(student.first);
// console.log(student.last);
// student.first = "Bhanu";
// console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());

// Conditionals, control flows (if else)
//  18 - 35 is my target demographic
// && AND
//  || OR

// let age = prompt("What is your age? ")
// if ((age >= 18) && (age <= 35)){
//     status = "target demo";
//     console.log(status);
// } 
// else{
//     status = "not my audience";
//     console.log(status);
// }


// Switch statenment
//  differentitate between weekdays and weekend
// day 0 --> sunday
// day 1 --> monday
// day 2 --> tuesday
// day 3 --> wednesday
// day 4 --> Thursday --> weekday
// day 5 --> friday --> weekend
// day 6 --> saturday --> weekend

switch (6) {
    case 0:
        text = "Weekend";
        break;
    case 5:30
        text = "Friday";
        break;
    case 6:
        text = "weekend";
        break;

    default:
        text = "week day";
        break;
}

console.log(text);


