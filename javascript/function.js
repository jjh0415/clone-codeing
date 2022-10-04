//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//1. Fuction declaration - 함수 정의
// fuction name(param1, param2) {body... return;}
// one function === one thing  -> 하나의 함수는 하나의 일만 하도록 지정
// naming; dosometing, command, verb -> 동사 형태로 naming
// -> e.g. createCardAndPoint -> createCard, createpoint
// function is object in js
function prinHello() {
    console.log(`Hello`);
}
prinHello();

function log(message){
    console.log(message);
}

log(`hello@`)

//2. Parameters
// premitive parameters : passed by value
// object parameters: passed by reference
function changeName(obj){
    obj. name = `coder` ;
}
const ellie = { name: `ellie`}
changeName(ellie);
console.log(ellie);

//3. Default parameters (add in ES6)
function showMassage(message, from = `unknown`){
    console.log(`${message} by ${from}`);
}
showMassage(`hi!`)

//4. Rest parameters (add in ES6)
function printAll(...args){
    for(let i = 0; i<args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll(`dream`, `coding`, `jungs`)

//5. Local scope - 밖에서는 안을 볼 수 없지만 안에서는 밖을 볼 수 있다. 
let globalMesssage = `global`; // global variable
function printMassage(){
    let message = `hello`;
    console.log(message); // local variable
    console.log(globalMesssage);
}
printMassage();

//6. Return a value
function sum(a,b){
    return a + b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);
console.log(result);
//7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
       //long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable -> 변수에 할당
// can passed as an argument to other functions. -> parameters 로 전달 됨
// can be returned by another fuction -> return값으로 Return 됨

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it
const print = function(){ // anonymous function
    console.log(`print`);
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2.Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === `love you`){
        printYes();
    } else{
        printNo();
    }
}
//anonymous function
const printYes = function (){
    console.log(`yes!`);
};
// named fuction
//better debugging in debugger's stact traces
//recursions
const printNo = function print(){
    console.log(`no!`);
};
randomQuiz(`wrang`, printYes, printNo);
randomQuiz(`love you`, printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function(){
    console.log(`simplePrint!`);
};
const simplePrint1 = () => console.log(`simplePrint1!`);

const add = function(a, b) {
    return a+b;
}
const add1 = (a,b) => a+b;

const simpleMultiply = (a,b) =>{
    //do something more
    return a*b;
}

// IIFE: Immediately Invoked Function Expression -> 함수를 선언함과 동시에 호출
(function hello(){
    console.log(`IIFE`);
})();