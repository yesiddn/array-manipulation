const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const productIndex = products.findIndex((product) => product.id === '🍔');
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

// Eliminar un elemento de un array sin mutar el array original
const newProducts = products.filter((product) => product.id !== '🍔');

console.log('products', products);
console.log('newProducts', newProducts);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const productsV2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'Deliciosos hot cakes'
  }
};

const productIndexV2 = productsV2.findIndex((product) => product.id === update.id);
productsV2[productIndexV2] = {
  ...productsV2[productIndexV2],
  ...update.changes
};

console.log('productsV2', productsV2);
console.log('-'.repeat(10));
