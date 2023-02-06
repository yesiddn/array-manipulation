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

const includeInArray2 = pets.includes('dog');
console.log(includeInArray2);