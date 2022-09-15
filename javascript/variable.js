//1.use srtict
//add in ES 5
//use this for valina javascript

'use strict';

//2. variable
//let(added in ES6 -> javascript 문법)
{
    let name = 'ellie';
console.log(name);
name =`hello`;
console.log(name);
}


// var (don't ever use this!!)
// var hoisting (move delaration from bottom to top)
// has no block scope

//3. constants
//favor immutable data type always for a few reasons
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

//4. variable types
//primitive type -> single item: number, string, boolean, null, undefiedn, symbol
//object type -> box container(다수의 single item)
//function, first-class function

const count = 17; //integer(정수)
const size = 17.1; // decimal number(소수)
console. log(`value: ${count}, type: ${typeof count}`)
console. log(`value: ${size}, type: ${typeof size}`)

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bifInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // over (-2*53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string - 글자
const char =`c`;
const brendan = 'brendan';
const greeting = 'hello' + brendan
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;// remplate literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//boolean - 참거짓
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null - 명확하게 비어있는 엔틱 값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined - 선언은 되었지만 값이 지정되있지 않음
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects - 맵 자료구조에서 고유의 식별자 필요 동시 다발적 으로 일어나는 코드에서 우선순위를 주기 위해 씀
const symbol1 = Symbol(`id`);
const symbol2 = Symbol(`id`);
console.log(symbol1 === symbol2);
// string이 똑같고 동일한 symbol을 만들고 싶을 때 
const gsymbol1 = Symbol.for(`id`);
const gsymbol2 = Symbol.for(`id`);
console.log(gsymbol1 === gsymbol2); //true
// symbol은 바로 출력하게 되면 에러가 뜸, .description을 써줘야 함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// object, real-life object, data structure
const ellie = {name: `ellie`, age: 20};
ellie.age = 21;
console.log(`value: ${ellie}, type: ${typeof ellie}`);
//5. Dynamic typing: dynamically typed language
// 프로그램이 동작할 때 할당 된 값에 따라 타입이 결정됨
let text = `hello`;
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = `7` + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = `8` / `2`;
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));