




console.log(myName); // We can access it is bcz hoisting
var myName= "GK";

// console.log(city);
// let city = "Pune";


const pin = "431202";
console.log(pin);

show(); // Normal function or named function are hoisted that's why we are bale to call or invoke it even before it's declaration
function show(){
    console.log("show function");
}




var display = function() {
    console.log("inside FE");
}
display(); // FE never hoisted
