// Допоміжна функція: генерації випадкових чисел
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Допоміжна функція: генерація масиву покупців за daysNumber днів
function getVisitorsNumber(daysNumber) {
  let res = [];

  for (i = 0; i < daysNumber; i++) {
    res.push(getRandomIntInclusive(0, 1000))
  };

  return res
}


function daysVisitorsMin(visitors) {
  let visitorsMin = Math.min(...visitors);
  let res = [];

  for(let i = 0; i < visitors.length; i++){
    if (visitors[i] == visitorsMin) {
      res.push(i);
    };
  };

  return res
}


function daysVisitorsMax(visitors) {
  let visitorsMax = Math.max(...visitors);
  let res = [];

  for(let i = 0; i < visitors.length; i++){
    if (visitors[i] == visitorsMax) {
      res.push(i);
    };
  };

  return res
}


function daysVisitorsLess(visitorsLess, visitors) {
  let res = [];

  for(let i = 0; i < visitors.length; i++){
    if (visitors[i] < visitorsLess) {
      res.push(i);
    };
  };

  return res.length == 0 ? '--' : res
}


function weekdaysVisitorsTotal(visitors) {
  let res = 0;

  for(let i = 0; i < 5; i++){
    res += visitors[i];
  }
  
  return res
}


function weekendsVisitorsTotal(visitors) {
  let res = 0;

  for(let i = 5; i <= 6; i++){
    res += visitors[i];
  }
  
  return res
}


function doMyHomeWork() {
  let renderHTML = '';
  let visitors = getVisitorsNumber(7);

  renderHTML = `
    Статистика відвідувачів магазину: ${visitors}
    <br> Дні, протягом яких кількість відвідувачів була меншою за 20:  ${daysVisitorsLess(20, visitors)}
    <br> Дні з мінімальною відвідувалюностю:  ${daysVisitorsMin(visitors)}
    <br> Дні з максимальною відвідувалюностю:  ${daysVisitorsMax(visitors)}
    <br> Загальна кількість клієнтів у робочі дні:  ${weekdaysVisitorsTotal(visitors)}
    <br> Загальна кількість клієнтів у вихідні дні:  ${weekendsVisitorsTotal(visitors)}
  `;
  document.write(renderHTML);
}

if (confirm('Почати тестування?')) {
  doMyHomeWork()
}