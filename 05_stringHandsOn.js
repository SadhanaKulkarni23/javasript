var square = function(num)
{
    var sq = num*num;
    console.log(`1. The square of the ${num} is = ${sq} `)
   
}
square(5);
square(6);
square(25);
square(100);
console.log(`------------------------------------------------------`)

console.log(`2.type of function is = ${typeof square} `)

console.log(`-------------------------------------------------------`)
var rectangle = function(length, width)
{
    var rect = length*width;
    console.log(`3.The Rectangle of the  is = ${rect} `)
}
rectangle(499,917);

console.log(`-------------------------------------------------------`)

// var Male="Virat";
// var Femal="Anushka";


var firstNo=1000;
var secondeNo=2000;

  var swapValues = function(valueOne,valueTwo){  //arguments   value0ne=100 ,value0ne=200
    console.log(`4. Before Swap:--  ${valueOne} ${valueTwo}`);
    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log(`4.After Swap:--  ${valueOne} ${valueTwo}`);
}
swapValues("Virat","Anushka");
console.log(`---------------------------------------------------`)
swapValues(1000,2000);
console.log(`---------------------------------------------------`)
//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
var stringOperation= function(){
var givenString ="JS the most popular language of internet"
console.log(`The Given String is:-${givenString}`)

var lengthOfString = givenString.length;
console.log("");
console.log("*****************************************************************");
console.log(`5.Write a FE which can perform the below steps "`);
console.log(`for string"JS the most popular language of internet`);
console.log(`   5.A Find the total characters in string.`);
console.log(`    Total character available in the string= ${lengthOfString}`);
console.log(`   5.B Find the character at index 6.`);
console.log(`     character at index 6th = ${givenString.charAt(6)}`);
console.log(`   5.c find the character index 11`);
console.log(`     character at index 11th = ${givenString.charAt(11)}`);
console.log( `  5.D Find last character using length property`);
console.log(`      last character  = ${givenString.charAt(givenString.length - 1)}`);
console.log(`   5.E Find the First Character in string`);
console.log(`       First  character  = ${givenString.charAt(0)}`);
var square =givenString.split(" ")
console.log(`   5.F A Total number words   = ${square.length}`);
// console.log(`${square}`);
var no =square.length
console.log(`   5.F.B  Square  of total number words = ${no*no}`);
console.log(`---------------------------------------------------------`)
}
stringOperation();