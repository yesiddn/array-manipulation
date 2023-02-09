// The sort method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'Dec'];

months.sort(); // Ordena alfabeticamente
console.log(months); // [ 'Dec', 'Feb', 'Jan', 'March' ]

const numbers = [1, 30, 4, 21, 100000];

numbers.sort(); // Ordena alfabeticamente
console.log(numbers); // [ 1, 100000, 21, 30, 4 ]

numbers.sort((a, b) => a - b); // Ordena de menor a mayor
console.log(numbers); // [ 1, 4, 21, 30, 100000 ]

numbers.sort((a, b) => b - a); // Ordena de mayor a menor
console.log(numbers); // [ 100000, 30, 21, 4, 1 ]

const words = [
  'réservé',
  'premier',
  'communiqué',
  'café',
  'adieu',
  'éclair',
  'banana',
];

words.sort(); // Ordena alfabeticamente
console.log(words); // [ 'adieu', 'banana', 'café', 'communiqué', 'premier', 'réservé', 'éclair' ]

// Para ordenadores más antiguos, es mejor usar localeCompare
words.sort((a, b) => a.localeCompare(b));
console.log(words); // [ 'adieu', 'banana', 'café', 'communiqué', 'premier', 'réservé', 'éclair' ]

const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    dateDelivery: new Date(2020, 1, 1, 12),
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    dateDelivery: new Date(2021, 1, 1, 12),
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    dateDelivery: new Date(2022, 1, 1, 12),
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    dateDelivery: new Date(2023, 1, 1, 12),
  },
];

orders.sort((a, b) => a.total - b.total); // Ordena de menor a mayor
console.log(orders);

orders.sort((a, b) => a.dateDelivery - b.dateDelivery);
console.log('Ordered by date', orders);