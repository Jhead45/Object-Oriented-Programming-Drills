// 5 object literals
let person1 = {
    name: 'Daniel',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
let person2 = {
    name: 'Devon',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
let person3 = {
    name: 'James',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
let person4 = {
    name: 'Cameron',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
let person5 = {
    name: 'Jose',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`)
    }
};
person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

//create a constructor that takes name, city age,

/*
function Person(name, city, age) {
    
        this.name = name;
        this.city = city;
        this.age = age;
};

Person.prototype.greeting = function() {
    console.log(`Hey! My name is ${this.name}! I am ${this.age}, and I am from ${this.city}.`);
};

let p1 = new Person('Daniel', 'Nashville', 45);
let p2 = new Person('Devon', 'Mt Juliet', 26);
let p3 = new Person('James', 'Mt Juliet', 35);
let p4 = new Person('Cameron', 'Hermitage', 25);
let p5 = new Person('Jose', 'Lebanon', 29);

p1.greeting();
p2.greeting();
p3.greeting();
p4.greeting();
p5.greeting();
*/
//ES6 syntax to repeat the last constructor function and build class

class Person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }

    greeting() {
        console.log(`Hey! My name is ${this.name}! I am ${this.age}, and I am from ${this.city}.`);

    }
}
let p1 = new Person('Daniel', 'Nashville', 45);
let p2 = new Person('Devon', 'Mt Juliet', 26);
let p3 = new Person('James', 'Mt Juliet', 35);
let p4 = new Person('Cameron', 'Hermitage', 25);
let p5 = new Person('Jose', 'Lebanon', 29);

p1.greeting();
p2.greeting();
p3.greeting();
p4.greeting();
p5.greeting();

//inheritatance drill  - properties manufacturer and number of wheels

class Vehicle {
    constructor(manufacturer, wheels) {
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} many wheels.`);
    }
}
class Truck extends Vehicle {
    constructor(manufacturer, wheels, doors, bed) {
    super(manufacturer, wheels);
    this.doors = doors;
    this.bed = true;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} many wheels. This vehicle only has ${this.doors}, and it is ${this.true} that it has a truck bed.`);
    }
}
class Sedan extends Vehicle {
    constructor(manufacturer, wheels, doors, size, mpg) {
        super(manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
        this.doors = doors;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} wheels. It a ${this.size} ${this.doors}door that gets ${this.mpg}.`);
    }
}
class Motorcyles extends Vehicle {
    constructor(manufacturer, wheels, handleBars, noDoors) {
        super(manufacturer, wheels);
        this.handleBars = handleBars;
        this.noDoors = noDoors;
    }
    aboutVehicle() {
        console.log(`This vehicle is made by ${this.manufacturer} and has ${this.wheels} many wheels. It is a motorcyle with ${this.handleBars} and ${this.noDoors}.`);

    }
}

let v1 = new Sedan('Honda', '4', '2', 'medium', '30mpg');

v1.aboutVehicle();