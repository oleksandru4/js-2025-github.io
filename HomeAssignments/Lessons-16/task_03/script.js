class Branch {
  constructor(country, city, street, office) {
    this.country = country
    this.city = city
    this.street = street
    this.office = office
  }

  toString() {
    return `м. ${this.city}, вул. ${this.street}, офіс ${this.office}` 
  }
}


class Service {
  constructor(name, cost, duration) {
    this.name = name
    this.cost = cost
    this.duration = duration //витрати нормо-годин
  }

  toString() {
    return `Послуга: ${this.name}, вартість (₴): ${this.cost}, витрати (нормо-годин): ${this.duration}.`
  }
}


class Firm {
  constructor(name, foundationYear, foundationMonth, services, branches) {
    this.name = name
    this.foundation = {
      month: foundationMonth,
      year: foundationYear
    }
    this.services = services
    this.branches = branches
  }

  getYearsExist() {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()

    return currentMonth > this.foundation.month ? 
      currentYear - this.foundation.year : currentYear - this.foundation.year - 1
  }

  displayCityBranches(city) {
    let branchList = this.branches.filter(branch => branch.city.toLowerCase() === city.toLowerCase())

    if (branchList.length === 0)
      console.log(`У місті ${city} філії не знайдено`)
    else {
      console.log(`Адреси філій місті ${city}:`)
      branchList.forEach(el => console.log(String(el)))
    }
  }

  displayAffordableServices(budget, timeLimit) {
    let serviceList = this.services.filter(service => service.cost <= budget && service.duration <= timeLimit)

    if (serviceList.length === 0) {
      console.log(`Послуг не знайдено.`)
    } else {
      console.log(`Доступні послуги:`)
      serviceList.forEach(el => console.log(String(el)))
    }
  }

  toString() {
    return `Фірма ${this.name}` 
  }

}

let branchList  = [
  new Branch('Україна', 'Київ', 'Хрещатик', '1A'),
  new Branch('Україна', 'Львів', 'площа Ринок', '5'),
  new Branch('Польща', 'Варшава', 'Marszałkowska', '10'),
  new Branch('Німеччина', 'Берлін', 'Unter den Linden', '25'),
  new Branch('Україна', 'Одеса', 'Дерибасівська', '12'),
  new Branch('Україна', 'Львів', 'Липинського', '6'),
  new Branch('США', 'Нью-Йорк', '5th Avenue', '100'),
  new Branch('Канада', 'Торонто', 'Yonge Street', '200'),
  new Branch('Франція', 'Париж', 'Champs-Élysées', '75'),
  new Branch('Україна', 'Харків', 'Сумська', '30'),
  new Branch('Великобританія', 'Лондон', 'Oxford Street', '45'),
  new Branch('Україна', 'Київ', 'вул. Саксаганського', '77'),
]

let serviceList = [
  new Service('Веб-розробка (базовий сайт)', 15000, 80),
  new Service('Дизайн логотипу', 5000, 20),
  new Service('SEO-оптимізація (початковий пакет)', 12000, 60),
  new Service('Розробка мобільного додатку (iOS/Android)', 45000, 300),
  new Service('Технічна підтримка (місяць)', 3000, 15),
  new Service('Копірайтинг (стаття)', 1000, 5),
  new Service('SMM (ведення сторінки в соцмережах)', 8000, 40),
  new Service('Аудит безпеки', 10000, 50),
  new Service('Налаштування контекстної реклами', 7000, 30),
  new Service('Тестування програмного забезпечення', 9000, 45),
]

let myFirm = new Firm ('Cat&Co', 2010, 7, serviceList, branchList)

console.log(`${String(myFirm)} існує ${myFirm.getYearsExist()} років`)
myFirm.displayCityBranches('Київ')
myFirm.displayCityBranches('Львів')
myFirm.displayAffordableServices(5000, 100)