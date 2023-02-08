const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let i = 0; i < othersElements.length; i++) {
  const element = othersElements[i];
  newArray.push(element);
}

console.log(newArray);

const otherArray = elements.concat(othersElements);
console.log(otherArray); // [1, 1, 2, 2, 3, 3, 4, 4]

const anotherArray = [...elements, ...othersElements];
console.log(anotherArray); // [1, 1, 2, 2, 3, 3, 4, 4]

const anotherArray2 = [...elements, ...'Hello'];
console.log(anotherArray2); // [1, 1, 2, 2, "H", "e", "l", "l", "o"]

// Si se quiere mutar el array original:
elements.push(...othersElements);
console.log(elements); // [1, 1, 2, 2, 3, 3, 4, 4]