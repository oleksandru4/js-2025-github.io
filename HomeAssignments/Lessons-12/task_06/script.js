function insertionSort(...arr) {
  let n = arr.length

  for (let i = 1; i < n; i++) {
    let activeEl = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j].length > activeEl.length) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = activeEl
  }

  return arr
}


function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid].length === target) return mid // Знайдено
    else if (arr[mid].length < target) left = mid + 1
    else right = mid - 1
  }
    
  return -1 // Не знайдено
}


let namesArr = ["Oleksandr", "Maksym", "Ivan", "Dmytro", "Artem",
                "Volodymyr", "Serhii", "Andrii", "Roman", "Ievhen",
                "Mariia", "Olena", "Nataliia", "Tetiana", "Iryna",
                "Viktoriia", "Anna", "Iuliia", "Oksana", "Kateryna",
                "Petro", "Olha", "Valentyna", "Svitlana", "Iurii"]

let namesSortArr = insertionSort(...namesArr)
let elInd = binarySearch(namesSortArr, 5)

document.write(`
  Початковий масив: ${namesArr} <br>
  Відсортований масив: ${namesSortArr} <br>
  ${elInd > -1 ? 
    `Під індексом ${elInd} ім'я довжиною 5 символів` : 'Список не містить імені довжиною в 5ть символів'}
`)