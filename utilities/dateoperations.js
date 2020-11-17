/**
 * Operations for date objects
 * @module utilities/dateoperations
 * @author Joe Standring
 * @see routes/public.js for where functions are imported
 */

/**
 * Create an array of dates between two dates
 * @param {date} first The starting date
 * @param {date} last The final date
 * @returns {array} An array of dates
 */

const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export default function getDates(first, last) {
// Array tused to get month names
  const dates = []
  const dateStrings = []
  const curDate = new Date(Date.parse(first))
  const lastDate = new Date(Date.parse(last))
  while (curDate <= lastDate) {
    dates.push(new Date(curDate))
    curDate.setDate(curDate.getDate() + 1)
  }
  for (const i in dates) {
    dateStrings[i] = `${days[dates[i].getDay()]}, \
      ${dates[i].getDate()} \
      ${months[dates[i].getMonth()]} \
      ${dates[i].getFullYear()}`
  }
  console.log(dates)
  console.log(dateStrings)
  return dateStrings
}
