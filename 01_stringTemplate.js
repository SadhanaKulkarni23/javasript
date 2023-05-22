




var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
// console.log("After slipt words are:",resultSplit,"Total number of words:",resultSplit.length);
console.log(`After slipt words are ${resultSplit} Total number of words ${resultSplit.length}`);
console.log(`Given string is: ${greet}`);
console.log("");

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number of parts:",resultSplit.length);
console.log("");

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of words:",resultSplit.length);
console.log("");

var myName = "Elon Musk";
var result = myName.startsWith("E");
console.log(`Is ${myName} start with character E: ${result}`);
console.log("");

var result = myName.startsWith("elon");
console.log(`Is ${myName} start with character "elon" : ${result}`);
console.log("");

var result = myName.endsWith("k");
console.log(`Is ${myName} start with character "k" : ${result}`);
console.log("");

var myName = "Mark Zukerberg";