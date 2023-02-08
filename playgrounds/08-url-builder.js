/*
En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-).

Para solucionarlo vas a encontrar una función llamada parseToURL que recibe un parámetro de entrada:

title: Un String con el título.
Dentro del cuerpo de la función parseToURL debes escribir tu solución.

Ejemplo 1:

Input: "La forma de correr Python"
Output: "la-forma-de-correr-python"

Ejemplo 2:

Input: "La API para nunca parar de aprender"
Output: "la-api-para-nunca-parar-de-aprender"

Ejemplo 3:

Input: "Curso de arrays"
Output: "curso-de-arrays"
*/

function parseToURL(title) {
  // Tu código aquí 👈
  const words = title.toLowerCase().split(' ');
  const slug = words.join('-');
  return slug;
}

// It can also be solved with replaceAll method

function solution(title) {
	return title.replaceAll(" ", "-").toLowerCase();
}; 