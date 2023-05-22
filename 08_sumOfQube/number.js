//This is solving by sir


console.log("");
// only one argument pass
// 1*1*1 + 2*2*2+ 3*3*3 + 4*4*4 + 5*5*5
var sumOfQube = function(){
    var sum = 0;
    for (let index = 1; index <=5; index++) {
        sum = sum + index * index * index; //3*3*3=27

        
    }
    console.log(`"Sum Of Qube Of Number is:${sum} "`);
}
sumOfQube(5);



console.log("");
//number of values-->(many aegument pass)
var sumOfQube = function(num){
    var sum = 0;
    for (let index = 1; index <=num; index++) {
        sum = sum + index * index * index; //3*3*3=27

        
    }
    console.log(`"Sum Of Qube Of Number is:${sum} "`);
}
sumOfQube(5);
sumOfQube(10);
sumOfQube(19);
sumOfQube(20);


console.log("");