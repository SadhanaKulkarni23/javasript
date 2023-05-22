
console.log("--------------------Assignment No2------------------------");
   function stringHandsOn(){
    var givenString ="    Hey you are doing good, keep it up   "
  console.log("");
  console.log(`1]  Given String is= ${givenString}`);
 console.log("");

  console.log("2]**--------------- length of the String-------------------------");
  var lengthOfString = givenString.length;
  console.log("");
  console.log(`     Length of  String is= ${lengthOfString}`);
console.log("");

  console.log("3]**------------Remove the leading and trailing extra spaces--------------");
   console.log("");
  var trimmedgivenString = givenString.trim();
  console.log(`     After Trim givenString is: ${trimmedgivenString}`);
  console.log(`     Lenght Trim givenString is: ${trimmedgivenString.length}` );
console.log("");
  console.log("4]**-----------------extra spaces-----------------------------");
 console.log("");
 console.log(`      Total number extra spaces : ${givenString.length - trimmedgivenString.length }`);
 console.log("");
 
 console.log("5]**------------------------first  character--------------------------------");
 console.log("");
 trimmedgivenString.charAt(0);
 console.log(`    first  character  : ${trimmedgivenString.charAt(0)}`);
 const last = trimmedgivenString.charAt(trimmedgivenString.length - 1);
 console.log(`    Last  character  : ${last}`)
 console.log("");

 console.log("*************************************************************************");
 /////////////////////////////////////////////////////////////////////////////
 var trimmedgivenString = givenString.trim();
 var resultSplit = trimmedgivenString.split(" ");

console.log(`6]  Total words in string :- ${resultSplit.length}`);
console.log("");
var indexOfgood = trimmedgivenString.indexOf("good")
console.log(`7] The index of word "good" :- ${indexOfgood}`);
console.log("");
var result = trimmedgivenString.endsWith("up");
console.log("--------------------------------------------------------------------");
console.log(`8] The istring ends with word “up” :-   ${result}`);
console.log("");
var result1 = trimmedgivenString.startsWith("Hey");

console.log(`9] The istring Starts with word “Hey” :-   ${result1}`);

}
stringHandsOn();
console.log("---------------------------------------------------------------------");