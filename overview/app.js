// arrow functions
// map example
const integers = [1, 2, 3]; //

const updatedIntegers = integers.map((number) => {
  return number += 9
}); // explicit return - adding 9 

// const updatedIntegers = integers.map((number) => number += 1); 
// the above 

console.log(updatedIntegers);
document.getElementById('example').innerText = updatedIntegers;

// arrow functions
// replacing numbers with strings

const integers2 = [1, 2, 3]; // an arroy of numbers

const updatedIntegers2 = integers2.map(() => "bob");

console.log(updatedIntegers2);
//this changes the result of updatedIntegers to ["bob","bob","bob"] replacing the numbers with 3 strings
console.log(updatedIntegers2);
document.getElementById('example2').innerText = updatedIntegers2;

// arrow functions
// filtering adult ages

const ages = [23, 42, 6, 18]; //we want to filter the adult ages from this array

const adults = ages.filter(function (age) {
  return age > 20; //this function will filter anything greater than 20 as an adult age.
});

console.log(adults);
document.getElementById('example3').innerText = adults;

// template string literals

const name = "Bill";
const age = 35;

const sentence = `My name is ${name} and I am ${age * 3} years old`;
//much cleaner way than old concatenation method
console.log(sentence);
document.getElementById('example4').innerText = sentence;

//PROTOTYPE METHODS
//FUNCTION CONSTRUCTOR
//
function Person(name, age) { //this is an object created using a function constructor
  this.name = name;
  this.age = age;

};
const bill = new Person('Billy', 25);
//created an object based on function constructor above
//whenever invoking the function of an object you must declare the 'NEW' operator

console.log(bill);
document.getElementById('example5').innerText = bill.name;

//adding methods to object
function Person(name, age) { //this is an object created using a function constructor
  this.name = name;
  this.age = age;
};

Person.prototype.speak = function () {
  console.log(`hi my name is ${this.name} and I am ${this.age} years old`);
  document.getElementById('example6').innerText = (`hi my name is ${this.name} and I am ${this.age} years old`);
}; // this is the prototype method which we have created based on the object below.


const fred = new Person('fred', 50); //created an object based on function constructor above
//whenever invoking the function of an object you must declare the 'NEW' operator

fred.speak();

class Person1 { //createing a new person class with a constructor
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() { //this is a method inside the constructor
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
class Customer extends Person1 { // this is a sub-class of Person1
  constructor(firstName, lastName, phone, member) { //adding more values
    super(firstName, lastName); // we use super to call the Person1 constructor

    this.phone = phone;
    this.member = member; //we do this for the 2 new values
  }
  id() { //this is a method inside the constructor
    return `Name: ${this.firstName} ${this.lastName} - Phone: ${this.phone} - Membership: ${this.member}`;
  }
}
const Alfred = new Customer('Alfred', 'Jones', '555-555', 'Gold'); //we instatiate customer
console.log(Alfred.id());
document.getElementById('example7').innerText = (Alfred.id());
console.log(Alfred.greeting());
document.getElementById('example8').innerText = (Alfred.greeting());