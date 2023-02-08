// split method returns an array of strings by separating the string into substrings. It is the opposite of join method.

const title = 'Curso de manipulación de arrays en JavaScript';

const words = title.split(' ');
console.log(words); // [ 'Curso', 'de', 'manipulación', 'de', 'arrays', 'en', 'JavaScript' ]

const slug = words.join('-').toLowerCase();
console.log(slug); // curso-de-manipulación-de-arrays-en-javascript