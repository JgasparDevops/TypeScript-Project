(() => {
  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password)
  }

  login({
    email:'nico@gmail.com',
    password: '12343252435432'}
    )

    type Size = 'S' | 'M' | 'L' | 'XL'


    const products: any = []
    const addProduct = (data:{
      title: string,
      createdAt: Date,
      stock: number,
      size?: Size
    }) => {
      products.push(data)
    }

    addProduct({
      title: 'pro1',
      createdAt: new Date(1993, 1, 1),
      stock:12
    })
    console.log(products)
})()
