console.log("Sadhana Kulkarni..");
console.log(" learning JS.");
console.log("Sajjala Kulkarni..");
var firstName = "Sadhana";
console.log(firstName);
var age; //variable declaration
age = "24"; //variable Initialization
console.log(age);
var holder;
console.log(holder); //undefined
holder = "My Spec";
console.log(holder);
holder = "Sadhana Spec"; //variable update
console.log(holder);




console.log("**********************Assigement 02*******************************");
   function stringHandsOn(){
    var givenString ="    Hey you are doing good, keep it up   "
  console.log("********************************************************************");
  console.log(`Given String is= ${givenString}`);
 

  console.log("********************** length of the String*************************");
  var lengthOfString = givenString.length;
  console.log(`Length of  String is= ${lengthOfString}`);
  console.log("**********Remove the leading and trailing extra spaces************");
   
  var trimmedgivenString = givenString.trim();
  console.log(`After Trim givenString is: ${trimmedgivenString}`);
  console.log(`Lenght Trim givenString is: ${trimmedgivenString.length}` );

  console.log("**********************extra spaces********************************");
 
 console.log(`Total number extra spaces : ${givenString.length - trimmedgivenString.length }`);
 console.log("********************first  character*******************************");
 trimmedgivenString.charAt(0);
 console.log(`first  character  : ${trimmedgivenString.charAt(0)}`)
 console.log("********************last  character********************************");
 const last = trimmedgivenString.charAt(trimmedgivenString.length - 1);
 console.log(`Last  character  : ${last}`)

 console.log("******************************************************");
 /////////////////////////////////////////////////////////////////////////////
 var trimmedgivenString = givenString.trim();
 var resultSplit = trimmedgivenString.split(" ");

console.log(`6.the count of total words available in the string :-${resultSplit.length}`);
console.log("******************************************************");
var indexOfgood = trimmedgivenString.indexOf("good")
console.log(`7.The index of word "good" :-${indexOfgood}`);
console.log("******************************************************");

 var sub=trimmedgivenString.substring(22)
 console.log(`8.A The  substring of index 22 is(using (using substring())  :-${sub}`);

 var sli=trimmedgivenString.substring(22)
 console.log(`8. B The  substring of index 22 is(using (using slice())  :-${sli}`);

 console.log("******************************************************");

var result = trimmedgivenString.endsWith("up");

console.log(`9.The istring ends with word “up” :-   ${result}`);

console.log("******************************************************");
var result1 = trimmedgivenString.startsWith("Hey");

console.log(`10.The istring Starts with word “Hey” :-   ${result1}`);

console.log("******************************************************");
}
stringHandsOn();