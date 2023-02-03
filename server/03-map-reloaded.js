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

console.log('Original orders', orders);
const total = orders.map(order => order.total);
console.log('total', total);

const orders2 = orders.map(order => {
  // order.tax = order.total * 0.19; // muta el objeto original
  return order;
});

console.log('Original orders', orders);
console.log('orders2', orders2);

const orders3 = orders.map(order => {
  return {
    ...order,
    tax: order.total * 0.19,
  }
});

console.log('Original orders', orders);
console.log('orders3 with tax (sin mutar orders)', orders3);
