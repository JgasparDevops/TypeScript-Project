(() => {
  let prices = [1,2,2,1,212, '', true]
  prices.push(12121)
  prices = [1,1,1,1,1]

  let products = ['hola', true]
  products.push(false)

  let mixed: ( number | string | boolean | object )[] = ['HOla', true]
  mixed.push(12)
  mixed.push({})
  mixed.push([])

  let numbers = [1,2,2,1,212]

  numbers.map(item => item * 2)



})()
