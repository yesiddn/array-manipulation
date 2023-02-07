// includes method returns true if the array contains a value we sent, false otherwise.

const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  if (pet === 'dog') {
    includeInArray = true;
    break;
  }
}
console.log(includeInArray);

const includeInArray2 = pets.includes('dog'); // retun true if the value is in the array
console.log(includeInArray2);

console.log('dogger'.includes('dog')); // true