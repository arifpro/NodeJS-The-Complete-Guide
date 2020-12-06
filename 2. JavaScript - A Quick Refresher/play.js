/**
 * Arrow Function, Objects, Properties, Methods
 * Async code, Promise, Template Literal, Wrap Up
 */

// <================== Object ==================>
const person = {
  name: "Khan",
  age: 21,
  greet1: () => {
    console.log("Hi, I am " + this.name);
  },
  greet2: function () {
    console.log("Hi, I am " + this.name);
  },
  greet3() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet1(); // Hi, I am undefined
person.greet2(); // Hi, I am Khan
person.greet3(); // Hi, I am Khan

const { name, age } = person;
console.log(name, age); // Khan 21

// <================== Array ==================>
const hobbies = ["Sports", "Movies"];

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // Sports Movies

for (let hobby of hobbies) {
  console.log(hobby);
  // Sports
  // Movies
}

console.log(hobbies.map((hobby) => "Hobby: " + hobby)); // [ 'Hobby: Sports', 'Hobby: Movies' ]
console.log(hobbies); // [ 'Sports', 'Movies' ]

hobbies.push("test");
console.log(hobbies); // [ 'Sports', 'Movies', 'test' ]

const copiedArray = [...hobbies];
console.log(copiedArray); // [ 'Sports', 'Movies', 'test' ]

const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 4, 5));

const newArray = [...hobbies, "a", "b"];
console.log(newArray); // [ 'Sports', 'Movies', 'test', 'a', 'b' ]

const newArray2 = [hobbies, "a", "b"];
console.log(newArray2); // [ [ 'Sports', 'Movies', 'test' ], 'a', 'b' ]

// <================== Async code, Promise ==================>
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });

  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello, ");
console.log("Khan");

// Hello, 
// Khan
// Timer is done!
// Done!
// Done!



// <================== Template Literal ==================>
const name = "Khan";
const age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);
