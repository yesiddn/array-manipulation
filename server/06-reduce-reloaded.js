const items = [1, 2, 3, 2, 3, 4, 3];

function countItems(acc, cur) {
  if (!acc[cur]) {
    acc[cur] = 1;
  } else {
    acc[cur] += 1;
  }
  return acc;
}

const counter = items.reduce(countItems, {});

console.log(counter);

// output: { 1: 1, 2: 2, 3: 3, 4: 1 }

const data = [
  { name: 'Nicolas', level: 'low' },
  { name: 'Andrea', level: 'medium' },
  { name: 'Zulema', level: 'hight' },
  { name: 'Santiago', level: 'low' },
  { name: 'Valentina', level: 'medium' },
  { name: 'Lucia', level: 'hight' },
];

/*
const levels = data.reduce((acc, cur) => {
  if (!acc[cur.level]) {
    acc[cur.level] = 1;
  } else {
    acc[cur.level] += 1;
  }
  return acc;
}, {});
*/ // this is the same as the next one

const levels = data
  .map((user) => user.level)
  .reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {}); // al concatenar varios métodos, la salida de uno se convierte en la entrada del otro. A esto se le llama "pipelines"

console.log(levels);
