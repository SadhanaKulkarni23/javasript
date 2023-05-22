

var leapYear = function isLeapYear(year){
    if (year==undefined || year== NaN || year == null || year =="") {
        console.log(`You Have Entered ${year} And Is Invalid Input.`);
    } 
    else if (year %4 ==0) {
        console.log(`You Have Entered ${year} It Is a Leap Year.`);
    } else {
        console.log(`You Have Entered ${year} It Is Not a Leap Year.`);
    } {
        
    }
}
console.log("---------------------------------------------------------------");
leapYear(2020);
console.log("");
leapYear(1999);
console.log("");
leapYear(1600);
console.log("");
leapYear(2022);
console.log("");
leapYear(1945);
console.log("");
leapYear(null);
console.log("");
leapYear("Twenty Twenty");
console.log("");
leapYear(undefined);
console.log("");
leapYear(NaN);
console.log("");
leapYear(1750);
console.log("---------------------------------------------------------------");