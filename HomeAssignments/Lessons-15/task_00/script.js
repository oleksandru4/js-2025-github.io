/*
  Задача 0.
  Дано два об’єкта. Обидва містять масив цілих чисел.
  При цьому у одному з них є функція знаходження суми,
  а у іншому – функція для знаходження добутку тих, які
  знаходяться між заданими мінімальним і максимальних значенням.
  Використати обидва методи стосовно обидвох об’єктів (використати call, apply)
*/
let obj1 = {
  numbers: [1, 2, 3, 4, 5, 6, 7],
  sum () {
    return this.numbers.reduce((accum, el) => accum + el, 0)
  },
}

let obj2 = {
  numbers: [11, 12, 13, 14, 15, 16, 17],
  prodMinMax (min, max) {
    let filterNumbers = this.numbers.filter(el => min  <= el && el <= max);
    return filterNumbers.reduce((accum, el) => accum * el, 1)
  },
}

console.log("obj1 (call): добуток едлементів між 2 і 6:", obj2.prodMinMax.call(obj1, 2, 6))
console.log("obj1 (apply): добуток едлементів між 2 і 6:", obj2.prodMinMax.apply(obj1, [2, 6]))
console.log("obj2 (call): cума елементів: ", obj1.sum.call(obj2))
console.log("obj2 (apply): cума елементів: ", obj1.sum.apply(obj2))