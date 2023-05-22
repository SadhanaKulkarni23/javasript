

function tcsEligibility(gradScore, hscScore, SscScore, candidateName){
if (gradScore>=70 && hscScore>=80 || SscScore>=90 ) {
    console.log(`       Congrats! ${candidateName} You are Eligible For "TCS" Interview.` );
} else {
    console.log(`       Unfortunately,${candidateName} You Are Not Eligible For Interview.`);
} 
}
console.log("");
tcsEligibility(80,86,90,"Priya");
console.log("");
console.log("***********************************************************************************");
tcsEligibility(70,65,55,"Sajjala");
console.log("");
console.log("***********************************************************************************");
tcsEligibility(60,79,88,"Harshita");
console.log("");
console.log("***********************************************************************************");