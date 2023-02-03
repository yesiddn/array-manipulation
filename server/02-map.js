const letters = ['a', 'b', 'c', 'd', 'e'];

const newArray = [];
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  newArray.push(letter.toUpperCase()); // push es un metodo mutable por que modifica el array newArray
}

console.log('Original', letters); // [ 'A', 'B', 'C', 'D', 'E' ]
console.log('newArray', newArray); // [ 'A', 'B', 'C', 'D', 'E' ]

const newArray2 = letters.map((letter) => letter.toUpperCase() + letter); // map es un metodo inmutable por que no modifica el array original, además de que map devuelve un nuevo array

console.log('Original', letters); // [ 'A', 'B', 'C', 'D', 'E' ]
console.log('newArray', newArray); // [ 'A', 'B', 'C', 'D', 'E' ]
console.log('newArray2', newArray2); // [ 'Aa', 'Bb', 'Cc', 'Dd', 'Ee' ]