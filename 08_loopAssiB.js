
console.log("");
console.log("******************************************************************************");
var word = "I am very good IT Developer.";
console.log(`The Given string is:  ${word}`);

// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
           
            // console.log( `vowel is ${char}`);
             count++;
    }
    
}

console.log(`Count The Total Number of  Vowels Are: ${count}`);
console.log("-----------------------------------------------------------------------------------");
var sum=0;
    var cube;
    for(index=1;index<=5;index++){
    
    cube=index*index*index;
    console.log(`Cube of Given Number Is : ${+cube}`);
    sum = sum+cube;
    
    }
    console.log(`     Total Sum of Cube is :`+sum);
console.log("---------------------------------------------------------------------------------------");
function oddPositionedChar(str){
    var abc= "";
    for (let index = 0; index < str.length; index++) {
       // console.log(str.charAt(index));
    
  if (index%2==1 && str.charAt(index) !== " ") {
    var char =(str.charAt(index));
    //console.log(char);
    abc = abc.concat(char);
  }
}
 console.log(`Given string is:->"${str}"`);
 console.log(`Odd position char Of Given String:->${abc}`);
 console.log("");
}
oddPositionedChar("Hard Work always pays back");
oddPositionedChar("Soon, I will be Angular IT Champ.");
console.log("*************************************************************************************************");
    