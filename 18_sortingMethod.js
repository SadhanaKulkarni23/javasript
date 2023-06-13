


const arrayNames = ["Shyam", "Anil", "Shubhu", "Jenny", "Bittu", "kittuuu"];
 arrayNames.sort();
 console.log(arrayNames);
 arrayNames.reverse();
 console.log(arrayNames);
 console.log("");


 const array = [23, 9, 204, 4, 0, 65, 106];
 array.sort((n1, n2)=>{
    return n1>n2 ? 1:-1;  
     // for decending order we can write :->> return n1>n2 ? -1:1;
     //const array = [23, 9, 204, 4, 0, 65, 106];
     //array.sort((n1, n2)=>{
     //   return n1>n2 ? -1:1;
    // });
     //console.log(array);
 });
console.log(array);
array.reverse();
console.log(array);