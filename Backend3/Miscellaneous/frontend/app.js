// constructor
function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hi, I'm ${this.name}`)
}

let p1 = new Person("adam",35);
let p2 = new Person("Eve",30); 