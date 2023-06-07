console.log("");
console.log("Given Array Is :-->  [ 20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19 ];");
console.log("");
const arrayNumbers = [ 20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19 ];

console.log("1) Finding All Numbers are greater Than 50 & Log on Console :->>--");
const arrayGreater50 = arrayNumbers.filter((element)=>{
return element>50;
});
console.log(arrayGreater50);
console.log("---------------------------------------------------------------------------");
console.log("2) Finding All Even  Numbers  & Log on Console :->>--");
const arrayEven = arrayNumbers.filter((element)=>{
return element%2==0;
});
console.log(arrayEven);
console.log("---------------------------------------------------------------------------");
console.log("3) Finding All Odd  Numbers  & Log on Console :->>--");
const arrayOdd = arrayNumbers.filter((element)=>{
return element%2==1;
});
console.log(arrayOdd);
console.log("---------------------------------------------------------------------------");
console.log("3) Finding All Multiple Of 5 Numbers  & Log on Console :->>--");
const arraymul5 = arrayNumbers.filter((element)=>{
return element%5==0;
});
console.log(arraymul5);
console.log("---------------------------------------------------------------------------");
console.log("3) Finding All  Numbers  between 20 and 50 & Log on Console :->>--");
const arrayBet = arrayNumbers.filter((element)=>{
return element>20;
});
//console.log(arrayBet);
    
const arrayBet50 = arrayBet.filter((element)=> {
    return element<50;
    });
    console.log(arrayBet50);
    

console.log("---------------------------------------------------------------------------");
