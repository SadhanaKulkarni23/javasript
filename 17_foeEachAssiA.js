

console.log("");
console.log("--------------------1) Array Name With There Index:->>-----------------------------");
const arrayNum =[1,-7,40,502,-77,91,0,108,89,-601];
arrayNum.forEach((index,element) => {
console.log(`       Index Is:-> ${index} ,Element Is:-> ${element},`);
});

const arrayNum2 =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`-------------------2) Positive Number From this Given Array:->>--------------------------`);
arrayNum2.forEach((element)=>{
    if(element>0){
        
        console.log( element );
     }
});
console.log(`-------------------2) Negative Number From this Given Array:->>--------------------------`);
arrayNum2.forEach((element)=>{
    if(element<0){
        console.log( element );
        
     }
    
});

console.log(`-------------------3) Even Number From this Given Array:->>--------------------------`);
arrayNum2.forEach((element)=>{
    if(element%2==0){
        
        console.log( element );
     }
});
console.log();
let sumofElement = 0;
arrayNum.forEach((element)=>{
    if(element){
        sumofElement=sumofElement+element;
    }
});
console.log(`-------------------4) Sum Of Element:->>--------------------------${sumofElement}`);
console.log(`-------------------5) Even Number Index And There Value:->>--------------------------`);
arrayNum2.forEach((element,index)=>{
    if(index%2==0){
        
        console.log(`Even Index:->${index}  &   There Value ${element} `);
     }
});
console.log("-----------------------------------------------------------------------------------------");
