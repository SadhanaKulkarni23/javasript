
console.log("");

const hdfcBank = {
    bankName : "HDFC Bank",
    accountNo : " 5544213879",
    ifsc :" hdfc0002451378",
    interestRate :" 8.7%% ",
    
    }
    
    const location={
        street : "Near Cidco Bus Stand",
        landmark : "Near Prozon Mall",
        City : "Aurangabad",
        state : "MH",
        PIN : "431003",
    }
    const loan={
        homeLoanInterest : "9.6%",
        personalLoanInterest : "7.9%",
        dueInterest : "8.6%",
    }

console.log("=====================================1) Create An Object hdfcBank :-> ==============================================================================");
const entries = Object.entries(hdfcBank);

console.table(hdfcBank);
console.log("=======================================================================================================================================================");
console.log("=====================================2) Create An Object Bank Location :-> ==============================================================================");

Object.assign(location);
console.table(location);
console.log("=======================================================================================================================================================");
console.log("=====================================3) Clone hdfcBank and Bank Location :-> ==============================================================================");

Object.assign(hdfcBank,location);
console.table(hdfcBank);
console.log("=======================================================================================================================================================");
console.log("=====================================4) Create An Object Rate Of Interest :-> ==============================================================================");
Object.assign(loan);
console.table(loan);
console.log("=======================================================================================================================================================");
console.log("=====================================5) Merge Step1,Step2 and Step3 As Follow:-> ==============================================================================");

const mergedObject = Object.assign(hdfcBank,location,loan); // Copy location and loan into the new object - mergedObject

console.table(hdfcBank);
  
//console.table(mergedObject);
console.log("=======================================================================================================================================================");
console.log("=====================================6) Create Traversing An Object:-> ==============================================================================");

for (const key in hdfcBank) { // key = "height"
    if (Object.hasOwnProperty.call(hdfcBank, key)) {
        const value = hdfcBank[key];
        console.log(`${key}, ${value}`);
    }
}