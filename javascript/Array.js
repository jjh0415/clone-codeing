`use strict`;

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = [`🍎`, `🍌`];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);
console.clear();
// 3. looping over an array
// print all fruits
// a. for
for(let i = 0;  i < fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
}
)
fruits.forEach((fruits) => console.log(fruits));

// 4. Addtion, deleteion, copy
// push: add an item to the end
fruits.push(`🍓`,`🍇`);
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift(`🍋`,`🥝`);
console.log(fruits);

// shift:remove an item the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// splice:  remove an item by index position
fruits.push(`🍓`,`🥝`,`🍐`);
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1, `🫐`,`🍑`);
console.log(fruits);

// combine two arrays
const fruit2 = [`🍅`,`🍉`];
const newFruits =  fruits.concat(fruit2);
console.log(newFruits);

// 5. Searching
// indexof: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf(`🥝`));
console.log(fruits.indexOf(`🫐`));
console.log(fruits.indexOf(`🍌`));

// includes
console.log(fruits.includes(`🫐`));
console.log(fruits.includes(`😭`)); // true or false

// lastIndexof
console.clear();
fruits.push(`🫐`);
console.log(fruits);
console.log(fruits.indexOf(`🫐`));
console.log(fruits.lastIndexOf(`🫐`));