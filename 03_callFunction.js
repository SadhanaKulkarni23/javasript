

// only inter question asking this point
const person = {
    name: "Stew",
    age: 54
}
function sayHello( company, role){
    console.log(`${person.name} ${person.age} ${company} ${role}`);
}
sayHello(person, "Apple" , "CEO");

console.log("Apply Method :->>");
sayHello.apply(person, ["Apple", "CEO"]);


console.log("bind Method :->>");
let funRef = sayHello.bind(person);
funRef("Apple", "CEO");