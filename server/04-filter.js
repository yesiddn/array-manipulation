// filter method returns a new array with all elements that pass the test implemented by the provided function.

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const newArray = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word.length > 6) {
    newArray.push(word);
  }
}

console.log('newArray', newArray);

const newArray2 = words.filter((word) => word.length > 6); // filter retorna un nuevo array como map
console.log('newArray2', newArray2);

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

// filtrar los pedidos que ya fueron entregados
const results = orders.filter((order) => order.delivered);
console.log('results', results);

// hacer un 'buscador' usando filter and includes
const search = (query) => {
  // return orders.filter(order => order.customerName == query);
  return orders.filter((order) => order.customerName.includes(query)); // includes retorna true o false
};

console.log('search', search('Nicolas'));