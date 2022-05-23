(() => {
  type Size = 'S' | 'M' | 'L' | 'XL'
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Size
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL')
  console.log(producto1)

  const createProductToJsonv2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
})()
