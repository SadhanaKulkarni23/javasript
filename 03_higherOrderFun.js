

// only inter question asking this point
function hello(callback){
    console.log("Hello");
    callback();
    let ques = function(){
        console.log("How are you ?");
    }
    return ques;
}
let greet = function(){
    console.log("Good Morning..");
}
let answer = hello(greet);
answer();

function sum(n1,n2){
return n1+n2;
}
let add = sum(20,40);
console.log(add);