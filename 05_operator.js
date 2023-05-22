
console.log(`1.The Square of length of word  `);
console.log(`-------------------------------------------------------------`)
console.log(`***************************************************************************`);


console.log("");
function squareOfWordLength(str){
//  var a= str.split(" ");

 var a1=str.length;
 console.log(`length of given string "${str}" :-  ${a1} `);
 var sq=a1 *a1;
 console.log(`square of string length  "${str}" :-  ${sq} `);
 

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");


console.log(`------------------------------------------------------------------`)
console.log(`***************************************************************************`);
console.log("");
function str1() {
    var str ="I am Angular Developer";
    console.log(`2. Given a string;-  "${str}" `);
    console.log(`--------------------------------------------------------------`)
    console.log(`****************************************************************`);
    var len=str.length;
    console.log(`2.1 The string length;-  ${len} `);
    console.log(`---------------------------------------------------------------`)

    var wor=str.split(" ");
     var totalWord=wor.length;
     console.log(`2.1 Total number words available in that string;-  ${totalWord} `);

     console.log(`------------------------------------------------------------------`)
     var result1=len / totalWord;
     console.log(`2.1 The string length / the total words;-  ${result1} `);

     console.log(`----------------------------------------------------------------------`)
     var Result= len * totalWord;
     console.log(`2.2 The string length * the total words;-  ${Result} `);
     console.log(`-----------------------------------------------------------------------`)
     console.log(`***************************************************************************`);



}
str1();