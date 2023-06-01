


console.log("");
class College {
    collegeName
     department
     city
     mobNo


  constructor(collegeName,department,city,mobNo){
        this.collegeName= collegeName;
        this.department = department;
        this.city =city ;
        this.mobNo = mobNo;
    }
    showDetails(){
        console.log(`All Details Of Vehicle--> "College Name:->" ${this.collegeName},"Department:->" ${this.department}, "City:->" ${this.city},"Mobile Number:->" ${this.mobNo}`);
    }
}
const vms = new College("Sangameshwar College", "Computer", "Solapur","9875426454");
const dyp = new College("Vidyan Mahavidyalay College", "Physics", "Nagpur","9462354821");
const bpc = new College("Baliram Patil College", "Maths", "Aurangabad","9425638795");
const gfc = new College("Green Finger College", "Geography", "Akluj","9754213684");

console.log("........................................2)Information About College:-->..............................................................................");
console.log("");
traverse(vms);
console.log("---------------------------------------------------------------------------------------------------------------------------------");
traverse(dyp);
console.log("-------------------------------------------------------------------------------------------------------------------------------");
traverse(bpc);
console.log("-------------------------------------------------------------------------------------------------------------------------------------");
traverse(gfc);
console.log("***************************************************************************************************************************************");

function traverse(collegeObject){
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key}, ${element}`);
            
        }
    }
}
    


