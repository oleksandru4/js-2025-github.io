class TDate {
  constructor(day, month, year) {
    this.day = day
    this.month = month
    this.year = year
    this.validateDate()
  }

  validateDate() {
    if (this.year < 0 || this.month < 1 || this.month > 12 || this.day < 1 || this.day > this.daysInMonth()) {
      throw new Error('Некоректна дата!')
    }
  }

  daysInMonth() {
    const days = [0, 31, this.isLeap() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return days[this.month]
  }

  remainingDaysInMonth() {
    return this.daysInMonth() - this.day
  }

  isLeap() {
    return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0
  }

  // Years
  increaseYears(years = 0) {
    this.year += years
  }

  decreaseYears(years = 0) {
    this.year -= years
  }
  
  // Months
  increaseMonths(months = 0) {
    this.month += months

    while (this.month > 12) {
      this.year++
      this.month -= 12
    }

    if (this.day > this.daysInMonth()) {
      this.day = this.daysInMonth()
    }
  }

  decreaseMonths(months = 0) {
    this.month -= months

    while (this.month < 1) {
      this.year--
      this.month += 12
    }

    if (this.day > this.daysInMonth()) {
      this.day = this.daysInMonth()
    }
  }

  // Days
  increaseDays(days = 0) {
    while (days > this.remainingDaysInMonth()) {
      days = days - this.remainingDaysInMonth() - 1
      this.day = 1
      this.increaseMonths(1)
    }
    this.day += days
  }

  decreaseDays(days = 0) {
    while (days >= this.day) {
      days = days - this.day
      this.decreaseMonths(1)
      this.day = this.daysInMonth()
    }
    this.day -= days
  }

  // Full date
  increaseDate(days = 0, months = 0, years = 0) {
    this.increaseYears(years)
    this.increaseMonths(months)
    this.increaseDays(days)
    this.validateDate()
  }


  decreaseDate(days = 0, months = 0, years = 0) {
    this.decreaseYears(years)
    this.decreaseMonths(months)
    this.decreaseDays(days)
    this.validateDate()
  }

  toString() {
    let dayStr = this.day < 10 ? '0' + this.day : this.day
    let monthStr = this.month < 10 ? '0' + this.month : this.month
    return `${dayStr}.${monthStr}.${this.year}`
  }
}

let myDate = new TDate(29, 2, 2024)
console.log('Початкова дата:', myDate.toString())

myDate.increaseDays(10)
console.log('Після збільшення на 10 днів:', myDate.toString())

myDate.decreaseDays(30)
console.log('Після зменшення на 30 днів:', myDate.toString())

myDate.increaseMonths(10)
console.log('Після збільшення на 10 місяців:', myDate.toString())

myDate.decreaseDate(20, 3, 7)
console.log('Після зменшення на 20 днів, 3 місяці і 7 років:', myDate.toString())