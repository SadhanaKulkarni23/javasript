console.log("");
console.log("----1) Arrow Function :No argument and No return Value:->> -------------");

let show = () => {
    console.log(`      "Good Morning, Today is Monday"`);
}
show(`      "Good Morning, Today is Monday"`);
console.log("--------------------------------------------------------------------------");
console.log("---- 2) Arrow Function With Arguments and also no return Value:->> --------");


let multiply = (num1, num2, num3=1) => {
     
   console.log( `          Multiplication Of NUmbers ${num1},${num2},${num3} = ${num1*num2*num3}`); 

}
multiply(5,5,2);
multiply(10,4);
console.log("---------------------------------------------------------------------------------");
console.log(`---- 3) Arrow Function : With arguments and return value:--> --------------------`);

console.log(`       a) Given Inputs Are:->> 100,100,200,349,756` );
let add = (num1, num2, num3, num4,num5) => {
    let result = num1 + num2 + num3 + num4 + num5;
    return result;
}
let result = add(100, 100,200,349,756);
console.log(`             Addition Of Numbers = ${result}`);
console.log("-----------------------------------------------------------------------------------");
let add2 = (num1, num2, num3, num4,num5) => {
    let result2 = num1 + num2 + num3 + num4 + num5;
    return result2;
}
let result2 = add2("I am ", "learning ","ES6 ","featurs ","in depth.");
console.log(`             b) Addition Of Inputes = ${result2}`);
console.log("-----------------------------------------------------------------------------------");

