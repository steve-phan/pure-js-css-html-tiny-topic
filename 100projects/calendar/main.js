const currentYear = new Date().getFullYear();

const weekDays = ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const calendar = document.getElementById('calendar');

const getAllDays = (year) => {
  // First day of the year - 1st January
  const firstDay = new Date(`January 1 ${year}`);
  // Last day of the year - 31th December - used to stop adding days to the array
  const lastDay = new Date(`December 31 ${year}`);
  console.log(firstDay.getDate());
  // Add first day
  let days = [firstDay];

  // Used to keep track of the day
  let lastDayInArray = firstDay;

  // Loop while there are new days to be added in the current year
  while (lastDayInArray.getTime() !== lastDay.getTime()) {
    //  Get new lastDayInArray
    lastDayInArray = addDays(lastDayInArray, 1);
    //   Push lastDayInArray to Array to array
    days.push(lastDayInArray);
  }

  return days;
};

const dates = getAllDays(2021);

function addDays(date, days) {
  var result = new Date(date);
  //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate

  result.setDate(result.getDate() + days);

  return result;
}

// console.log(dates);
