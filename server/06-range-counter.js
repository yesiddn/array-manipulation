const number = [
  1, 2, 3, 5, 7, 2, 10, 5, 9, 0, 7, 8, 2, 4, 2, 4, 6, 3, 2, 7, 9, 0, 6, 4, 2, 3,
  10, 5, 9, 0, 3, 2, 4, 6, 8, 9, 6, 7, 10, 2, 8, 1, 9, 5, 9, 1, 0, 3, 10, 5, 1,
  2, 10, 3, 6, 7, 2, 8, 1, 9, 10, 10, 5, 9, 1, 0, 3, 5,
];

function rangeCounter(arr) {
  return arr.reduce((acc, cur) => {
    if (cur < 4) acc['0-3']++;
    else if (cur < 7) acc['4-6']++;
    else if (cur < 10) acc['7-9']++;
    else acc['10']++;
    return acc;
  }, {'0-3': 0, '4-6': 0, '7-9': 0, '10': 0})
}

console.log(rangeCounter(number));