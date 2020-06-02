// MAPS = key-value pairs - can use ANY type as a key or pair value

const map1 = new Map(); //we use the 'new' keyword and we set Map()

// Set keys

const key1 = 'some string',
  key2 = {},
  key3 = function () {};


// set map values by key

map1.set(key1, 'Bananas');
map1.set(key2, 'Apples');
map1.set(key3, 'Oranges');


// Get values by key using the get() method
console.log(map1.get(key1), map1.get(key2), map1.get(key3));
document.getElementById('example10').innerText = (map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
console.log(map1.size);

// ITERATING MAPS
// Loop using for...of to get keys and values

for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
};
document.getElementById('example11').innerText = (`${key} = ${value}`);