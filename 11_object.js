




let person = {
    height: "6feet",
    name: "Bill Gates",
    city: "Pune",
    age: 54,
    isMarried: true,
    address : {
        street: "Wakad Road",
        landmark: "Near Datta Mandir",
        city: "Pune",
        PIN: 415520, // 556677 updating this pin
        state:"MH",
        country: "India"
    },
    walk: function(totalWalk){
        console.log(`${this.name} Yess..I can walk ${totalWalk}`);
    },
    details: function(){
        console.log(`Person Details: Name ${this.name}, City: ${this.city}, Age: ${this.age}`);
    },
    getDetails: function(){
       let details = `Name: ${this.name}, Age${this.age}, Is Married: ${this.isMarried}, City:${this.city}`;
    return details;
    }
};

console.log(`Type Of Person is ${typeof person}`);

console.log(`--------------Accessing Object Prpertities-----------------`);
//Dot Notation
const personName = person.name;
const personHeight = person["height"]
console.log(`Person Name is : ${personName}`);
console.log(`Person City is : ${person.city}`);
console.log(`Person Height is :${person["height"]}`);


console.log(`--------------Updating Object Prpertities-----------------`);
person.city = "Mumbai";
person.isMarried = false;
person.address.PIN=556677;
console.log(person.address);
console.log(`Person City is : ${person.city}`);
console.log(`Person Married Status is : ${person.isMarried}`);

console.log(`--------------Adding Object Prpertities-----------------`);
person.gender = "Male";
person.state = "MH";

console.log(person);
console.log(person);

console.log(`--------------Deleting Object Prpertities-----------------`);
delete person.height;

console.log(person);
console.table(person);
console.log("");

console.log(`--------------Creating An Empty Object-----------------`);
let student = {

}
console.log(student);
student.marks = "90%";
console.log(student);

const isCityAvailable = "city" in student;
console.log(`Is City Available in Student object: ${isCityAvailable}`);
console.log(`Is Marks available in Student object:${"marks" in student}`);

console.log(`--------------Invoking or calling Object Method-----------------`);
person.walk("5km");
person.details();
const details = person.getDetails();
console.log(` Details About Person is: ${details}`);

console.log(`--------------Accessing Nested Object Prpertities-----------------`);
let personCountry = person.address.country;
console.log(personCountry);
person.address.PIN=556677;
console.log(person.address);