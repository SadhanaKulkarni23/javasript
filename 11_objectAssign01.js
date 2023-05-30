console.log("");
console.log(".......................................Object Assignment........................................");
console.log("");
let professor = {
name: "Ramesh",
gender: "Male",
department: "Computer",
age: 35,
city: "Pune",
degrees:{
   engineering: "CSE",
   PHD: "Adv Computer",
   Doctorate: "Philosophy"
},
experience: function(totalExp){
    console.log(`5)--- Professor Total Experience Is:--> ${totalExp}years.`);
},
last:function(orc){
    console.log(`6)--- Last Element Array Is :--> "${orc}"`);
}
}
console.log(`1) --- Professor 5 Objects Are:-->`);
const profName = professor.name;
console.log(`    (Name: ${profName}, Gender: ${professor.gender}, Department : ${professor.department}, Age : ${professor.age}, City : ${professor.city})`);
console.log("===============================================================================================");
console.log("");
console.log(`2) --- Professor Degrees Objects Are:-->`);
console.log(    professor.degrees);
console.log("===============================================================================================");
console.log("");

console.log("3) --- Professor Certifications That Are:-->");
professor.cert="Haker Rank Participation",
professor.cert1 = "Certificate In IFE Course",
professor.cert2 = "Certificate In ADV Programming."
console.log(`  "[${professor.cert}", "${professor.cert1}", "${professor.cert2}"]`);
console.log("===============================================================================================");
console.log("");
console.log("4)--- Professor Total Degrees That Are:-->");
console.log(professor.degrees);
console.log("===============================================================================================");
console.log("");
professor.experience(14);
console.log("===============================================================================================");
console.log("");
professor.last("Oracle Certificate");
console.log("===============================================================================================");


