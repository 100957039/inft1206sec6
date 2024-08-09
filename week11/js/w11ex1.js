console.log("Nerd");

// Create Objects - using literal notation

// Properties must be a unique string
let person1 = {
    // The property
    firstName : "Sirius",

    // Can make multiword keys, needs " " around
    // However, cannot use 'person1.last name', must use person1["last name"]
    "last name" : "Black",
    age : 31,
    // Gets the current date
    lastAccess : new Date(),
    // Have properties inside a property
    address : {streetNumber: 12, streetName: "Grimmauld Place", city: "London"},
    print: function(){console.log(`Their name is ${this.firstName} ${person1["last name"]} and they're ${person1.age}.`)}
};

console.log(person1.firstName);
console.log(person1["firstName"]);
console.log(person1["last name"]);
console.log(person1.age);

// Change property value
person1.age = 33;
console.log(person1.age);

console.log(person1.lastAccess);

console.log(person1.address.city);
person1.print();

// Creates a new property and stores the value
person1.height = "200 cm";
console.log(person1.height);



// Create Objects - using function constructor
// Added default values to function, thoigh they're not necessary
function Person2(first='Bob', last='Bob', age='Bob'){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.lastAccess = new Date();
    this.print = function(){console.log(`Their name is ${this.firstName} ${this.lastName} and they're ${this.age}.`)}
}

let p1 = new Person2("Remus", "Lupin", 31);
let p2 = new Person2("James", "Potter", 21);

let p3 = new Person2();
let p4 = new Person2("Severus", "Snape");

console.log(p1.firstName);
p1.print();
p2.print();
p3.print();

// Use prototype to add a new property to an object
Person2.prototype.height = '1000 cm';

console.log(p1.height);
console.log(p2.height);

p2.height = '999 cm'

console.log(p1.height);
console.log(p2.height);

console.log(p4.lastName);
console.log(p4.lastName);
console.log(p4.firstName);
console.log(p4.lastName);



// Create Object - using classes
class Person3{
    // '#' means variable is private
    #firstName;
    lastName;
    age;

    constructor(first, last, age){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    print(){
        console.log(`Their name is ${this.firstName} ${this.lastName} and they're ${this.age}.`)
    }
}

let p5 = new Person3("Peter", "Pettigrew", 31);

p5.print();
// console.log(p5.#firstName);, won't work because it's private

class Student extends Person3{
    grade;

    constructor(first, last, age, grade){
        super(first, last, age);
        this.grade = grade;
    }
}

let s1 = new Student("Harry", "Potter", 17, 78);
s1.print();
console.log(s1.grade);