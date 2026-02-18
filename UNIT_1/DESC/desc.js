const student = {
    name: "DEEP",
    age: 20,
    address: {
        city: "Gzb",
        pincode: 201206,
        state: "UP"
    }
};

// Function with object destructuring
function displaystu({ name = "NIKHIL", age, address: { city } }) {
    console.log(`My name is ${name} and my age is ${age} and I live in ${city}`);
}

displaystu(student);

// Swapping using array destructuring
let p = 5;
let q = 10;

[p, q] = [q, p];

console.log(p); // 10
console.log(q); // 5

// Array destructuring can be used to swap two variables
// without using a temporary variable.
