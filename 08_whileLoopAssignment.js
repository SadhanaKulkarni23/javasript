console.log(`-------------------------------------------------------------`)
console.log(`1.WAP to print numbers from 5 to 15 by incrementing 1`)
let i=5; // initialization
let sum ="";
while (i<=15) { // condition 0<=15
  
   sum = sum+" "+i;
   i = i+1;
}
console.log(`No of 1 t0 5 is :-[${sum}]`);
console.log(`-------------------------------------------------------------`)

console.log(`2.WAP to print numbers from 50 to 40 by decrementing by 1`)
let j=50; // initialization
let sum1 ="";
while (j>=40) { // condition 0<=15
   
   sum1 = sum1 + " " + j;
   j = j-1;
}
console.log(`No of 50 t0 40   is :-[${sum1}]`);

console.log(`-------------------------------------------------------------`)

console.log(`3.WAP to find first 15 odd numbers`)
let a=1; // initialization
let count = 0;
let odd ="";
while (count<= 15) { // condition 0<=15

if(a%2 == 1){
   odd = odd + " " + a;
   count++;
}
a = a+1;

}

console.log(`First 15 odd no is:-[${odd}]`);

console.log(`-------------------------------------------------------------`)

console.log(`4.WAP to find first 15 Even  numbers`)
let b=0; // initialization
let count1 = 0;
let even ="";
while (count1<= 15) { // condition 0<=15

if(a%2 == 0){
   even = even + " " + b;
   count1++;
}
b = b+1;

}

console.log(`First 15 odd no is :-[${even}]`);

console.log(`-------------------------------------------------------------`)
console.log(`5.WAP to print table of 5 like → 5 10 15 20 25 50`)
let s=5; // initialization
let sum2 ="";
while (s<=50) { // condition 0<=15
  
   sum2 = sum2 +" "+ s;
   s = s+5;
}
console.log(`No 5 t0 50  increment by 5 :-[${sum2}]`);

console.log(`-------------------------------------------------------------`)
console.log(`6.WAP to print table of 10 like 10 20 30 40 100`)
let s1=10; // initialization
let sum3 ="";
while (s1<=100) { // condition 0<=15
  
   sum3 = sum3 +" "+ s1;
   s1 = s1+10;
}
console.log(`No 10 t0 100  increment by 10 :-[${sum3}]`);

console.log(`-------------------------------------------------------------`)
console.log(`6.WAP to print table of 10 in reverse order like → 100 90 80 70 ...... 10`)

var c=100; // initialization
var sum4 ="";
while (c >=10) { // condition 0<=15
  
   sum4 = sum4 +" "+ c;
   c = c-10;
}
console.log(`No 0 t0 10  Decrement  by 10 :-[${sum4}]`);