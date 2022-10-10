//Object
// one of the javaScript's data types.
// a collection of related data and/or fuctionality
// Nearly all objects in javascript are instances of object
// object = {key: value}; key=propertie=접근할 수 있는 변수 / value=key의 값

// 1. Literals and properties
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

//2. Computed properties
// key should be always string
console.log(jihwan.name); //코딩하는 순간에 값을 받아오고 싶을 때
console.log(jihwan[`name`]); // 실시간으로 값을 받앙고 싶을 때
jihwan[`hasJob`] = true;
console.log(jihwan.hasJob);

//function printValue(odj, key){
  //  console.log(odj.key);
//}

function printValue(odj, key){
    console.log(odj[key]);
}
printValue(jihwan, `name`);  
printValue(jihwan, `age`);  

//3. property alue shorthand
const person1 = {name: `bob`,  age: 2};
const person2 = {name: `steve`,  age: 5};
const person3 = {name: `dave`,  age: 6};
const person4 = new Person(`jihwan`, 27);
console.log(person4);

// 4. constuctor function
function Person(name, age){
    //this = {};
        this.name = name;
        this.age = age;
   //return this;
}

//5. in operator: property existence check (key in obj)
console.log(`name`in jihwan); //해당 obj 안에 key가 있는지 확인
console.log(`age`in jihwan);
console.log(`random`in jihwan);
console.log(jihwan.random);

// 6. for..in vs for..of
// for(key in obj)

for(key in jihwan) { // 모든 일들을 받아와서 처리하고 싶을 때 사용
    console.log(key);
}

//for ( value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
for(value of array){
    console.log(value);
}

//7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name:`jihwan`, age: `27`};
const user2 = user;
console.log(user);

//oled way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.log(user3);

//new way
const user4 = {};
Object.assign(user4,user);
console.log(user4);
const user5 = Object.assign({},user);
console.log(user5);

//another example
const fruit1 = {color: `red`};
const fruit2 = {color: `blue`, size: `big`};
const mixed = Object.assign({}, fruit1, fruit2); // 앞에 뒤와 같은property가 있다면 뒤의 값을 덮어 씌움
console.log(mixed.color);
console.log(mixed.size);