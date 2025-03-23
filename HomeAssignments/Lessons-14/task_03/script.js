// 1) Загальну вартість (нові ціни - price)
console.log('1) Загальна вартість (нові ціни - price)')
console.log(dataList.reduce((res, el)=> res += el.price, 0))

//2) Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
console.log('2) Знайти кількість товарів, у яких ціна зменшилась (price < old_price).')
console.log(dataList.reduce((res, el)=> {
  return el.price < el.old_price ? res + 1 : res
}, 0))

// 3) Товари, які доступні (sell_status:"available")
console.log('3) Товари, які доступні (sell_status:"available")')
console.log(dataList.filter((el)=> el.sell_status === 'available'))

// 4) сформувати новий список об”єктів тільки доступних  для продажу товарів,
// які міститимуть тільки ідентифікатор товару (id), нову ціну (price),
// стару ціну (old_price), та ціну у доларах (usd_price)
console.log('4) сформувати новий список об”єктів тільки доступних  для продажу товарів...')
let subList = dataList.reduce((res, el)=>{
  if (el.sell_status === 'available') {
    let {id, price, old_price, usd_price} = el
    res.push({id, price, old_price, usd_price})
  }
  return res
},  [])
console.log(subList)
