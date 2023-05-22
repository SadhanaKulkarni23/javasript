

var show = function(){
    console.log("");
    return 100;
}
console.log(`Result is ${show()}`);





// console.log(" I am giong to office.");
// var isTrafficToDailyRoute = false;
// if(isTrafficToDailyRoute){
// console.log("Daily route");

// }
// console.log("Office");



// console.log(" I am giong to office.");

// var isTrafficToDailyRoute = true;
// if(isTrafficToDailyRoute){
// console.log("Daily route");
// console.log("Going To Cab.");
// console.log("Had breakfast in middle.");
// }
// console.log("Office");



// var num1 = 13;
// var isEven = num1%2==0;
// if (isEven) {
//     console.log(`Even Number: ${isEven}, Even number: ${num1}`);
// } else {
//     console.log(`Even Number: ${isEven}, Odd number: ${num1}`);
// }
// console.log("After if else statement.");



// gender-male-->age>=21 AND <=90
// gender-male-->age>=18 AND <=90
// gender-other--> invalid
function merriageEligibility(age, gender, candidateName){
if (age==null || age == undefined || gender==null ||gender==undefined) {
    console.log(`"Invalid Input"${candidateName} ${age} ${gender}`);
} else {
    if (gender=="male" && age<21 || age>90)  {
        console.log(`"Invalid Input"${candidateName} ${age} ${gender}`);
    } else {
        if ((gender=="female" && age<18 || age>90)) {
            console.log(`"Invalid Input"${candidateName} ${age} ${gender}`);
        } else {
           if (gender=="other") {
            console.log(`Not allowed ${candidateName} ${age} ${gender} as constitution`);
           } else {
            if (gender=="male") {
                console.log(`You are eligible ${candidateName} ${age} ${gender}`);
                
            } else {
                console.log(`You are eligible ${candidateName} ${age} ${gender}`);
            }
           } 
        }
    }
}  
// function merriageEligibility(age, gender, candidateName){
    // invalid data
    // if ((gender=="male" && age<21 || age>90) || (gender=="female" && age<18 || age>90) || age==null || age == undefined || gender==null ||gender==undefined) {
    //     console.log(`${candidateName} not allowed: ${age} ${gender}`);
    // } else {
    //     // valid path
    // }
    // merriageEligibility();
    // happy path
if (gender=="male"&& age>=21 && age<=90) {
   console.log(`${candidateName}${gender}${age} You are Eligible`); 
} else  {
   if (gender=="female" && age>=18) {
    console.log(`${candidateName}${gender}${age} you are eligible To marriage.`);
   } else {
    if (gender=="other") {
        console.log(`${candidateName}${gender}${age} You are not allowed as Indian constitution.`);
    } else {
        if (gender=="female" && age<18) {
            console.log(`Hay girl ${candidateName} You are below 18 not allowed.`);
        } else {
                console.log(`Hay girl ${candidateName} You are below 21 not allowed.`);
        }
    }
    
    
   } 
}
}
merriageEligibility(23,"male","Shyam");
merriageEligibility(21,"female","Jenny");
merriageEligibility(33,"other","Matoki");
merriageEligibility(17,"female","Ketty");
merriageEligibility(-30,"male","Mandy");
merriageEligibility(350,"male","Sandy");
merriageEligibility(-50,NaN,"tady");
merriageEligibility(52,null,"rina");

