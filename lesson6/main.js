/*let people = ["Greg", "Mary", "Devon", "James"];

// 1a
for(i=0; i<people.length; i++){
  console.log(people[i])
}

// 1b
people.shift()
console.log(people);

// 1c
people.pop();
console.log(people);

// 1d
people.unshift("Math");
console.log(people);

// 1e
people.push("Thanh");
console.log(people);

// 1f
// const people = ["Math", "Mary", "Devon", "Thanh"];
// console.log(people.slice(1,4));
console.log(people.slice(1,4));

// 1g
console.log(people.indexOf("Mary"));

// 1h
console.log(people.indexOf("Foo"));*/

// 1j
let people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Arite");
console.log(people);

// 1i
let withBob = people.concat("Bob");
console.log(withBob);