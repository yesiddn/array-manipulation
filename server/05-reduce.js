const totals = [1, 2, 3, 4, 5];

let sum = 0;

// Suma de un array usando un for
for (let i = 0; i < totals.length; i++) {
  const number = totals[i];
  sum += number;
}

console.log(sum);

// Suma de un array usando reduce
const total = totals.reduce((acc, cur) => acc + cur, 0); // acc: accumaulator, cur: current

console.log(total);