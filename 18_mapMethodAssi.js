

console.log(" Here Given Array Is:-->> [20,11,40,25,23,11,9,31,60,2,19]");
console.log("");
console.log("-------------------------1) Adding 10 Into Each Element Then New Array Is:->>-------------------------------");
const array = [20,11,40,25,23,11,9,31,60,2,19];
const addArray = array.map( (element) => {
    return element+10;
} );
console.log(addArray);
console.log("");
console.log("--------------------------2) Square of Each Array Element  Is:->>----------------------------------------------");
const squArray = array.map( (element) => {
    return element*element;
} );
console.log(squArray);
console.log("");
console.log("--------------------------3) Adding Index Value into its Correspondind each array element Is:->>----------------------------------------------");
const indArray = array.map( (element, index) => {
    return element*index;
} );
console.log(indArray);