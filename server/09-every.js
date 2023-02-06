const numbers = [1, 30, 49, 29, 10, 13];

let result = true;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number >= 40) {
    result = false;
  }
}
console.log(result);

// Result using every

const result2 = numbers.every((number) => number <= 40);
console.log(result2);

// Exercise: check if all team members are 15 or younger
const team = [
  {
    name: 'Nicolas',
    age: 12,
  },
  {
    name: 'Andrea',
    age: 8,
  },
  {
    name: 'Zulema',
    age: 2,
  },
  {
    name: 'Santiago',
    age: 18,
  },
];

const isYoungerTeam = team.every((member) => member.age <= 15);

// NOTE: every() return true if array is empty