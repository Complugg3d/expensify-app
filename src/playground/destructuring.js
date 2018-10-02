//Object destructuring

// const person = {
//     age: 28,
//     location: {
//         city: 'Zapopan',
//         temp: 28
//     }
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// console.log(`Its ${temperature} in ${city}.`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holliday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//Array destructuring

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', "$2", "$2.50", "$2.75"];

const [product, ,mediumPrice] = item;

console.log(`a Medium ${product} costs ${mediumPrice}`);




