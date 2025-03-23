const sites = [
  {
    companyName: "WebSolutions Inc.",
    owner: "Іван Петренко",
    sponsors: [
      { firstName: "Олег", lastName: "Сидоренко", investment: 50000 },
      { firstName: "Марія", lastName: "Коваленко", investment: 30000 },
    ],
    releaseYear: 2002,
    cost: 150000,
  },
  {
    companyName: "DigitalCraft Ltd.",
    owner: "Ольга Степаненко",
    sponsors: [
      { firstName: "Андрій", lastName: "Мельник", investment: 75000 },
    ],
    releaseYear: 2023,
    cost: 200000,
  },
  {
    companyName: "CodeMasters Group",
    owner: "Петро Степаненко",
    sponsors: [
      { firstName: "Наталія", lastName: "Лисенко", investment: 60000 },
      { firstName: "Сергій", lastName: "Волошин", investment: 40000 },
      { firstName: "Вікторія", lastName: "Кравченко", investment: 25000 },
    ],
    releaseYear: 2008,
    cost: 180000,
  },
  {
    companyName: "PixelPerfect Studio",
    owner: "Галина Бондаренко",
    sponsors: [],
    releaseYear: 2024,
    cost: 250000,
  },
  {
    companyName: "InnovateTech LLC",
    owner: "Дмитро Шевченко",
    sponsors: [
      { firstName: "Юрій", lastName: "Павленко", investment: 90000 },
    ],
    releaseYear: 2022,
    cost: 170000,
  },
]

// 1) загальна вартість усіх сайтів
console.log('1) загальна вартість усіх сайтів')
console.log(sites.reduce((res, el) => res + el.cost ,0))

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
console.log('2) кількість сайтів, що було зроблено між 2000 та 2009 рр.')
let sitesNumber = sites.reduce((res, el) => {
  if (2000 < el.releaseYear && el.releaseYear < 2009)
    res = res + 1
  return res
}, 0)
console.log(sitesNumber)

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
console.log('3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000')
function totalInvestment (sponsors) {
  return sponsors.reduce((res, el) => res += el.investment, 0)
}

let totalInvestmentMore100000 = sites.reduce((res, el)=>{
  if (totalInvestment(el.sponsors) > 100000)
    res +=1
    return res
}, 0)
console.log(totalInvestmentMore100000)

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
console.log('4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)')
let allSponsors = []
sites.forEach((el) => allSponsors.push(...el.sponsors))
console.log(allSponsors)

//5) знайти рік, коли прибуток був найбільшим
console.log('5) знайти рік, коли прибуток був найбільшим')
let subArr = sites.map((el) => [el.releaseYear, el.cost]) // копіюється [рік, прибуток] в окремий масив
subArr.sort((a, b) => a[1] - b[1]) // сортується по зростанню прибутку
console.log(subArr[subArr.length - 1][0]) // виводиться останній

//6) упорядкувати список за спаданням прибутку
console.log('6) упорядкувати список за спаданням прибутку')
sites.sort((a, b) => b.cost - a.cost)
console.log(sites)

//7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
console.log('7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000')
let subList1 = []
sites.forEach((el)=>{
  if (el.cost > 10000) subList1.push(JSON.parse( JSON.stringify(el) ))
})
let subList2 = JSON.parse(JSON.stringify(subList1))
console.log('subList1 :', subList1)
console.log('subList2 :', subList2)

