/*
Tu reto es retornar true si dentro de array de números al menos uno es un número par, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:

Input: [1, 3, 5, 7, 10, 11]
Output: true

Ejemplo 2:

Input: [1, 3, 5]
Output: false

Ejemplo 3:

Input: []
Output: false
*/

function checkArray(numbers) {
  // Tu código aquí 👈
  return numbers.some((number) => number % 2 === 0);
}
