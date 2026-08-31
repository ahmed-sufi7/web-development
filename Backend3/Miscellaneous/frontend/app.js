// constructor
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, I'm ${this.name}`)
// }

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hello, I'm ${this.name}`); 
//     }
// }


// let p1 = new Person("adam",35);
// let p2 = new Person("Eve",30); 



// Inheritance
class Person{
    constructor(name,age){
        console.log("person class constructor!");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, My name is ${this.name}`);
    }

}

class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor!")
        super(name,age);
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name,age);
        this.subject = subject;
    }
}

let s1 = new Student("Ahmed", 21, 100);
let s2 = new Student("Raza", 21, 100);

let t1 = new Student("Adam", 31, "All");