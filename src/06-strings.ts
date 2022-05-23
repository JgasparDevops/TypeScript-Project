(() => {
  let productTitle = 'My amazing product'
  productTitle = 'My amazing product change'
  console.log('productTitle', productTitle)

  const productDescription = 'blablablabalablabal'
  console.log('productDescription', productDescription)


  let isNew: boolean = false;
  let productPrice = 100;


  //con el backtick me permite concatenar y escribir en varias lineas
  const summary = `
     title: ${productTitle}
     description: ${productDescription}
     price: ${productPrice}
     isNew: ${isNew}
  `;

  console.log('summary', summary);
})()
