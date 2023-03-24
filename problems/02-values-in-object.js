/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

//Function using for...in loop
function valuesInObject(obj) {
  let arr = [];
  
  for (let valuesInObject in obj) {
    arr.push(obj[valuesInObject]);
  }

  return arr; 
}

//Function using Object.values
function valuesInObject(obj) {
  let arr = Object.values(obj);

  return arr;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;