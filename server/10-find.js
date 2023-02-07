// Find method returns the first element in the array that satisfies the provided testing function.
// FindIndex method returns the index of the first element in the array that satisfies the provided testing function.

const numbers = [1, 30, 49, 29, 10, 13];

let found = undefined;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number >= 20) {
    found = number;
    break;
  }
}
console.log(found);

const found2 = numbers.find((number) => number >= 20);
console.log(found2);

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

// find
const found3 = products.find((product) => product.id === '🍔');
console.log(found3);
// findIndex
const found4 = products.findIndex((product) => product.id === '🍔');
console.log(found4); // if not found, returns -1