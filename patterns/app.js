// Basic structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       // console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  let data = []; //creating empty array

  function add(item) {
    //this is where we have private data
    data.push(item);
    console.log("Item Added....");
  }

  function get(id) {
    // creating a function called get which returns item called (id)
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    //this is the public data. returning an object literal
    add: add,
    // get: get
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Mark" });
console.log(ItemCtrl.get(2));
document.getElementById("example").innerText = ItemCtrl.get(2);
