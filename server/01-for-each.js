const letters = ['a', 'b', 'c', 'd'];

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  console.log(letter);
}

letters.forEach(letter => console.log('forEach', letter));