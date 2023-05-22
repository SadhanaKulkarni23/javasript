console.log("---------------------------Assignment 01----------------------------------------------");
console.log("");
console.log("-------------------------------**Task1**------------------------------------------------");
console.log("   Find The Greatest Number Among Two Numbers.");
console.log("---------------------------------------------------------------------------------------");
var greaterNumber = function(num1,num2) {
var result = num1>=num2 ?`      The Greatest NUmber -->>  ${num1} This is Greatest Number.` : `        The Smallest Number-->>  ${num2} This is Smallest Number. `;
console.log(`${result}`);

}
greaterNumber(10, -10);
greaterNumber(899, 800);
console.log("----------------------------------------------------------------------------------------");
console.log("");
console.log("-------------------------------**Task2**------------------------------------------------");
console.log("   Check wheather the given number is Even or Odd.");
console.log("----------------------------------------------------------------------------------------");
var isEvenorOddNum = function(num){
   var result =  num%2 == 0 ? `       The Given Number-->> ${num} is Even Number.` : `       The Given Number-->> ${num} is Odd Number.`
console.log(`${result}`);
}
    
isEvenorOddNum(29);
isEvenorOddNum(44);
isEvenorOddNum(0);
isEvenorOddNum(101);
console.log("----------------------------------------------------------------------------------------");
console.log("");
console.log("--------------------------------**Task3**----------------------------------------------------");
console.log("  Check Wheather the Given Word has Even or Odd in Lenth.");
console.log("----------------------------------------------------------------------------------------");

var wordLength = function(word){
   var len =  word.length;
   var result = len%2 ==0 ? `The Given Word "${word}" is -->>  Even in Length.`: `The Given Word "${word}" is-->>   Odd in Length.`;
   return result;
}
var returnValue = wordLength("JavaScript");
console.log(`      JavaScript has ${returnValue}`);
var returnValue = wordLength("Developer");
console.log(`      Developer has ${returnValue}`);
var returnValue = wordLength("Google");
console.log(`      Google has ${returnValue}`);
console.log("******************************************************************************************************");

