// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
var adam = {}
2. Give adam a name property with the value "Adam".
adam.name = "Adam"
3. Add a spouse property to terah and assign it the value of adam.
terah.spouse = adam
4. Change the value of the terah weight property to 125.
terah.weight = 125
5. Remove the eyeColor property from terah.
delete terah.eyeColor
6. Add a spouse property to adam and assign it the value of terah.
adam.spouse = terah
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
   var children = {}
   terah.children = children

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
  var carson = {}
  carson.name = "Carson"
  children.carson = carson

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
  var carter = {}
  carter.name = "Carter"
  children.carter = carter
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

11. Add a children property to adam and assign it the value of terah children.


*/

// __________________________________________
// Write your code below.
var adam = {}

adam.name = "Adam"

terah.spouse = adam

terah.weight = 125

delete terah.eyeColor

adam.spouse = terah

var children = {}
terah.children = children

var carson = {}
carson.name = "Carson"
children.carson = carson

var carter = {}
carter.name = "Carter"
children.carter = carter

var colton = {}
colton.name = "Colton"
children.colton = colton

adam.children = terah.children





// __________________________________________
// Reflection: Use the reflection guidelines
// What parts of your strategy worked? What problems did you face?
//What questions did you have while coding? What resources did you find to help you answer them?
//What concepts are you having trouble with, or did you just figure something out? If so, what?
// At the beginning I was thinking way too much. I thought I had to understand fully what the Driver code meant.
// because of this I found it incredibly frustrating. However when I started focusing only on what the directions
//were asking me to do I was able to accomplish it pretty easily. It took me a bit to figure out steps 7-10
// but then I realized they were asking for the same things as the previous steps just combined into one step. 
// like step 8 is basically the same ideas as steps 1-3 just combined into only one step (if that makes any sense).
//Did you learn any new skills or tricks?
//How confident are you with each of the Learning Competencies?
//Which parts of the challenge did you enjoy?
//Which parts of the challenge did you find tedious?
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
