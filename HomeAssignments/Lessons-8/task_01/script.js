// Допоміжна функція: генерації випадкових чисел
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function getGrades(k) {
  let res = [];

  for (i = 0; i < k; i++) {
    res.push(getRandomIntInclusive(2, 5))
  };

  return res
}


function getAverageGrade(grades) {
  let sum = 0;

  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }

  return sum > 0 ? sum / grades.length : sum

}


function getCategory(grades) {
  let grad_B = false;
  let grad_C = false;
  let grad_D = false;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] == 2) {
      grad_D = true
    }
    if (grades[i] == 3) {
      grad_C = true
    }
    if (grades[i] == 4) {
      grad_B = true
    }
  };

  if (grad_D) {
    return 'двійочник'
  }
  if (grad_C) {
    return 'трійочник'
  }
  if (grad_B) {
    return 'хорошист'
  }

  return 'відмінник'
}


function doMyScript() {
  const subjectsNumber = 3;
  let renderHTML = '';
  let grades = [];
  
  grades = getGrades(subjectsNumber);
  renderHTML = `
    Оцінки з ${subjectsNumber} предметів: ${grades}
    <br> Cередній бал:  ${getAverageGrade(grades).toFixed(2)}
    <br> Студент - ${getCategory(grades)}
  `;
  document.write(renderHTML);

  console.log(grades);
}


if (confirm('Почати тестування?')) {
  doMyScript()
}