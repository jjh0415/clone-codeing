'use strict';

// Class - 객체지향 언어
// 서로 연관있는 변수나 함수들을 묶어놓은 컨테이너
// 내부로 보여지는 변수와 밖에서 보여지는 변수가 있음(캡슐화)
// 상속과 다양성이 일어남
// template
// declare once
// no data in
// 붕어빵 틀

//** object */
//class를 활용하여 만드는 것
// instance of a class
// created many times
// data in
// 붕어빵

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritancce

//1. class declarations
class person {
    // constructor
    constructor(name, age) {
        //fields
        this. name = name;
        this. age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    } 
}

const jihwan = new person(`jihwan`, 27)
console.log(jihwan.name);
console.log(jihwan.age);
jihwan.speak();

//2. Getter and setters - 잘못된 값을 입력했을 시 (ex) age:-1) 정정해줌
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value) {
        //if(value<0){
       //     throw Error(`age can not be negative`);
        //}
        this._age = value < 0 ? 0 : value;
    } 
}

const user1 = new User(`steve`, `job`, -1);
console.log(user1.age);

//3. Fields(public,private)
// Too soon!
// mdn javascript 참조
class Experiment {
    publicField = 2;
    #privateField = 0;   //#->privateField 선언 - class 내부에서만 값이 변경 및 보여짐
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4.Static properties and methods - class 자체에 묶임
//Too soon!
class Article{
    static publisher = `malcong coding`;
    constructor(articleNumver) {
        this.articleNumver = articleNumver;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2); 
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance - 상속
// a way for one class to extend another class
class shape {
    constructor(width, height, color) {
        this. width = width;
        this. height = height;
        this. color = color;
    }

    draw() {
        console.log(`drwing ${this.color} color of is`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends shape{} // extends로 상속해줌
class Traiangle extends shape{
    draw(){
        super.draw(); // 부모의 함수를 호출함
        console.log(`▲`);
    }
    getArea() {
        return (this.width * this.height) / 2; 
    }

    toString(){
        return `triangle color: ${this.color}`;
    }
} 


const rectangle = new Rectangle(20, 20, `blue`);
rectangle.draw();
console.log(rectangle.getArea());
const traiangle = new Traiangle(15, 20, `red`);
traiangle.draw();
console.log(traiangle.getArea());

//6. Class checking: instanceof -> object가 해당 class를 사용하는지 안하는지를 확인하는 것
console.log(rectangle instanceof Rectangle);
console.log(traiangle instanceof Traiangle);
console.log(traiangle instanceof Rectangle);
console.log(traiangle instanceof shape);
console.log(traiangle instanceof Object);
console.log(traiangle.toString());