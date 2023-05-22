

console.log("******************Vote Eligibility***********************************");
console.log("");
function voteEligibility(age){
   // null undefined 
 if ((age==null && age == undefined)) {
    console.log(`Your Age is : ${age}"You Are Not Eligible For Vote."`);
 } else {
    // 0  >120
    if (age<=18 && age<120){
        console.log(`Your Age is : ${age}"You Are not Eligible For Vote."`);
        } else {
            console.log(`Your Age is : ${age}"You Are  Eligible For Vote."`);  
        }
    }}

// if (age<=18) {
//     console.log(`Your Age is : ${age}"You Are  Eligible For Vote."`);
// } else {
//     console.log(`Your Age is : ${age}"You Are  Eligible For Vote."`);
// }
                 voteEligibility(45);
                console.log("-------------------------------------------------------------");
                 voteEligibility(17);
                console.log("--------------------------------------------------------------");
                voteEligibility(8);
                console.log("---------------------------------------------------------------");
                voteEligibility(20);
                console.log("----------------------------------------------------------------");
                voteEligibility(-10);
                 console.log("--------------------------------------------------------------");
                voteEligibility(30);
                console.log("---------------------------------------------------------------");
                voteEligibility(0);
                console.log("---------------------------------------------------------------");
                voteEligibility(undefined);
                console.log("---------------------------------------------------------------");
                voteEligibility(null);
                console.log("**************************************************************");