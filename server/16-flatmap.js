// The flatMap method is a combination of the map and flat methods, it is used to map an array and then flatten the result into a new array.

const users = [
  { userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
  { userId: 2, username: 'Mike', attributes: ['Lovely'] },
  { userId: 3, username: 'Nico', attributes: ['Nice', 'Cool'] },
];

const attributes = users.map((user) => user.attributes);
console.log(attributes); // [ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]

const attributes2 = users.map((user) => user.attributes).flat();
console.log(attributes2); // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

const attributes3 = users.flatMap((user) => user.attributes);
console.log(attributes3); // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

// Exercise 1
const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: 'Cita 1',
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: 'Cita 2',
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: 'Cita 2',
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: 'Cita 4',
    },
  ],
};

let allEvents = [];
for (const key in calendars) {
  const calendar = calendars[key];
  allEvents = [...allEvents, ...calendar.flatMap((event) => event.startDate)];
}
console.log(allEvents);

// Solution 1
// Convertir el objeto en un array de arrays
const allEvents2 = Object.values(calendars);
console.log(allEvents2);

// Aplanar el array de arrays anterior
const allEvents3 = allEvents2.flat();
console.log(allEvents3);

// Mapear el array para objtener los startDate
const allEvents4 = allEvents2.flatMap(calendar => calendar.map(event => event.startDate));
console.log(allEvents4);