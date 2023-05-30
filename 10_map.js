let map = new Map();
console.log(typeof map);

// Key:Roll Number, Value:Student Name
map.set(11, "Ram");
map.set(22, "Shyam");
map.set(33, "Siya");
map.set(44, "Jenny");


const mapSize = map.size;
console.log(`Map Size ${mapSize}`);

// Retrieve the value using key
const valueOfKey22 = map.get(22);
console.log(valueOfKey22);


console.log(map);
console.table(map);

