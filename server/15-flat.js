// The flap method is used to flatten an array of arrays

const numbers = [0, [1, 2], [3, 4], [5, 6, [7, 8, [9, 10]]]];

const newArray = [];

for (let i = 0; i < numbers.length; i++) {
  const number1 = numbers[i];
  for (let j = 0; j < number1.length; j++) {
    const number2 = number1[j];
    newArray.push(number2);
  }
} 
console.log(newArray);

const otherNewArray = numbers.flat(); // 1, 2, 3, 4, 5, 6, [7, 8, [9, 10]]
// flat recibe como argumento la profundidad de la matriz: 1, 2, 3 o hasta el nivel que se requiera
console.log(otherNewArray);

const anotherArray = numbers.flat(3);
console.log(anotherArray);

// Otra forma de hacerlo es con recursividad
function recursividad(array) {
  let newArray = [];

  array.forEach((element) => {
    if (typeof element != 'object') newArray.push(element);
    else newArray = [...newArray, ...recursividad(element)];
  });

  return newArray;
}

console.log(recursividad(numbers));