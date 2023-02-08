// join method returns a string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

const elements = ['Fire', 'Air', 'Water', 'Earth'];

let result = '';
const separator = ' - ';

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  result += element + separator;
}
console.log(result); // Fire - Air - Water - Earth -

const result2 = elements.join(separator);
console.log(result2); // Fire - Air - Water - Earth