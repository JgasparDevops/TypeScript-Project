(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0
    prices.forEach(item => {
      total += item
    });
    return total.toString()
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices)
    console.log(`el precio es ${rta}`)
  }

  printTotal([1,2,3,4,5,56])

  const rta = calcTotal([1,2,3,4,5,56])

  console.log(rta)
})()
