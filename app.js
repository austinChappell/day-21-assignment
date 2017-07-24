const chalk = require('chalk');
const moment = require('moment');

let longDate = moment().format('MMMM Do YYYY, h:mm:ss a');
let dayOfYear = moment().format('Do');

let currentYear = moment().format('YYYY');

let momentMidnight = moment().clone().startOf('day');
let diff = moment().diff(momentMidnight, 'seconds');

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('It is ' + chalk.blueBright(longDate) + '.');

console.log('It is the ' + chalk.magenta(dayOfYear) + ' day of the year.');

console.log('It is ' + chalk.cyan(diff) + ' seconds into the day.');

if (moment().isDST()) {
  console.log('It ' + chalk.yellowBright('is') + ' during Daylight Saving Time');
} else {
  console.log('It ' + chalk.yellowBright('is not') + ' during Daylight Saving Time');
}

if (isLeapYear(currentYear)) {
  console.log('It ' + chalk.redBright('is') + ' a leap year.');
} else {
  console.log('It ' + chalk.redBright('is not') + ' a leap year.');
}
