//Object
// one of the javaScript's data types.
// a collection of related data and/or fuctionality
// Nearly all objects in javascript are instances of object
// object = {key: value}; key=propertie=접근할 수 있는 변수 / value=key의 값
  
const obj1 ={}; // 'object literal' syntax
const obj2 = new Object(); // class를 활용해 Object 만들기/ 'object constructor' syntax
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jihwan = {name: `jihwan`, age: 4};    
print(jihwan);

//with javascropt magic(dynamically typed language)
// can add prperties later
jihwan.hasJob = true;
console.log(jihwan.hasJob);

//can delete properties later
delete jihwan.hasJob;
console.log(jihwan.hasJob);