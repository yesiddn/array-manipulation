/*
Tu reto es retornar true si dentro de array de números todos son pares, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 6, 8, 10]
Output: true

Ejemplo 2:

Input: [1, 3, 5, 7, 10, 11]
Output: false

Ejemplo 3:

Input: [1, 3, 5]
Output: false

Ejemplo 4:

Input: []
Output: false
*/

function checkArray(array) {
  // Tu código aquí 👈
  if (!array.length == 0) {
    return array.every((number) => number % 2 === 0);
  } else {
    return false;
  }
}