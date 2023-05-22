

var myString = " Hey you are doing good,keep it up   ";
console.log(myString);
var myStringLength = myString.length;
console.log("string length is",myStringLength);
console.log("----------------------------------------------------");

var trimedString = myString.trim();
var trimedStringLength = trimedString.length;
console.log("trimed string is:",trimedString);
console.log("trimed string length is",trimedStringLength);
var TotalExatraspaces = myStringLength-trimedStringLength;
console.log("Total Number Of Extra Spaces Are",TotalExatraspaces);
console.log("------------------------------------------------------");

var charAtZeroIndex = trimedString.charAt(0);
var charAtLastIndex = trimedString.charAt(trimedStringLength-1);
console.log("Charater at Zero Index",charAtZeroIndex);
console.log("Charater at Last Index",charAtLastIndex);
console.log("--------------------------------------------------------");




