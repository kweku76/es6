// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({
  a,
  b
} = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
  e: 500
});
({
  a,
  b,
  ...rest
} = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
  e: 500
});

// Array Destructuring



// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

// Object Destructuring

//const person = {
//name: 'John Doe',
//age: 32,
//city: 'Miami',
//gender: 'Male',
//sayHello: function () {
//console.log('Hello');
//}
//}

// New ES6 Destructuring
const {
  name1,
  age1,
  city1,
  sayHello
} = person;

console.log(name1, age1, city1);
document.getElementById('example9').innerText = (Alfred.id());
sayHello();