// v.1
// function getYear({day, month, year}, monthAdd) {
//   return year + Math.floor((month + monthAdd - 1) / 12)
// }

// v.2 
function getYear({day, month, year}, monthAdd) {
  let date = new Date(year, month+monthAdd, day)
  return date.getFullYear()
}


let myDate = {
  day: 23,
  month: 3,
  year: 2025
}

console.log(getYear(myDate, 32))