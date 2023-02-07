// Some method returns true if at least one element in the array satisfies the provided testing function.


// Execise with for
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let existNumber = false;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 === 0) {
    existNumber = true;
    break;    
  }
}

console.log(existNumber);

// Exercise with some
const existNumber2 = numbers.some(number => number % 2 === 0);

console.log(existNumber2);

// Exercise: exist a delivered order?
const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
];

const isDelivered = orders.some(order => order.delivered);

console.log(isDelivered);

// Exercise: exist a date in the calendar?
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: 'Cita de trabajo',
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: 'Cita con mi jefe',
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: 'Cena',
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

// install date-fns library with npm i date-fns
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate },
    );
  });
}

console.log(isOverlap(newAppointment));