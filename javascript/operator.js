// 1. string concatenation
console.log(`my` + ` cat`);
console.log(`1` + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

console.log(`string literals:

''''''''
1 +2 = ${1+2}`);

console.log("ellie's book");
console.log(`ellie\'s book`);
console.log("ellie's \n book");
console.log("ellie's \tbook");

//2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log( 4 / 2); // divide
console.log(2 * 4); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1
// preincrement = counter
console.log(`preIncrement: ${preIncrement}, conter:${counter}`); 
//postIncrement = conter
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, conter:${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, conter:${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, conter:${counter}`);

//4. Assignment opertators
let x = 3;
let y = 6;
x += y; // x= x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operators: || (or) , && (and) , !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value - 무거운 것(예| check),익스프레션, 함수 등을 제일 뒤에 배치하는 것이 효율적
console.log(`or: ${value1 || value2 || check()}`)

function check(){
    for(let i = 0; i < 10; i++){
        //wastomg time
        console.log(`😭`);
    }
    return true;
}

// &&(and) , finds the first false value
console.log(`or: ${value1 && value2 && check()}`)

//often used to compress long if-statement
//nullableObject && nullableObject.something

function check(){
    for(let i = 0; i < 10; i++){
        //wastomg time
        console.log(`😭`);
    }
    return true;
}

//!(not) - 반대값으로 출력
console.log(!value1);

//7. Equality
const stringFive = `5`;
const numberFive = 5;

//== loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {name: `ellie`};
const ellie2 = {name: `ellie`};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. Conditional operators: if
// if, else if, else
const name = `ellie`;
// if()안의 값이 맞으면 {}값 출력, 아니라면 -> else if()값이 맞으면 {}값 출력, -> 둘다 아니라면 else{}값 출력
if (name === `ellie`) {
    console.log(`welcome, jihwan`);
} else if (name === `coder`){
    console.log(`you are amazing coder`);
} else {
    console.log(`unkwnon`)
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === `ellie` ? `yes` : `no`);

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser =`Firefox`;
switch(browser){
    case `IE`:
        console.log(`go away!`);
        break;
    case `Chrome`:
    case 'Firefox':
        console.log(`love you!`);
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops -  반복문 -> statement가 false로 나오기 전까지 무한대로 반복 실행
// while loopm while the condition is truthy
// body code is cxecuted
let i = 3;
while(i > 0) { 
    console.log(`while: ${i}`);
    i--;
} 

// do whle loop, body code ix executed first,
// then check the condition.
// 블록을 실행 후 조건과 맞는지 검사
do {
    console.log(`do while: ${i}`)
    i--;
} while(i > 0); 

// for loop,, for(begin; condition; step) begin 고정후 condition이 안맞을 때 까지 실행
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for(let i =3; i > 0; i = i - 2) { 
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loop -> 되도록 피하는게 좋음 과부하..
//for(let i = 0; i < 10; i++){
   // for (let j = o; j< 10; j++){
        //console.log(`i: ${i}, j:${j}`);
    //}
//}

//break(loop를 완전히 끝냄), continue(지금것만 넘어가고 다시 실행)

for (let i = 0; i < 11; i++) {
    if(i === 9){
        break;
    }
    console.log(`ep2: ${i}`);
}

for (let i = 0; i < 11; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(`ep1: ${i}`);
}