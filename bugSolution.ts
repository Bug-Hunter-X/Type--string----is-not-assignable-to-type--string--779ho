function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1:  Iterate through the array
user.forEach(name => console.log(greeter(name)));

// Solution 2: Use template literals for more flexible concatenation
console.log(`Hello, ${user.join(' ')}`);

// Solution 3: Modify the function signature to accept an array
function greeterArray(persons: string[]): string {
    return "Hello, " + persons.join(' ');
}
console.log(greeterArray(user));