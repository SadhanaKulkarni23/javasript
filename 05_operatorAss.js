


 console.log(`*-------TCS Interview Eligibility--------*`);
 console.log("");
 console.log("*********************************************************************************");
tcsEligibility= function(gradScore,hscScore,sscScore,candidateName){
    
  var result= ((gradScore>=70) || (hscScore>=80) || (sscScore>90)) ? `Congrates "${candidateName}" you are eligible for TCS Interview. `: `Unfortunately, "${candidateName}" you are not eligible for TCS Interview.`;
    console.log(result)
//    return result;

}
 tcsEligibility(80, 86, 90,"Rohit")

 console.log(``)

 tcsEligibility(70,65, 55, "Sachin")
 console.log("");
 
 tcsEligibility(60,79, 88, "Mahendra")
 
 console.log(``)
 console.log("*********************************************************************************");