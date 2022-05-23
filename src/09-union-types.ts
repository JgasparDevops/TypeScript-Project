(() => {
  let userId: string | number
  userId = 1212
  userId = 'asasas'

  function greeting(mytext: string | number) {
    if(typeof mytext == 'string'){
      console.log(`string ${mytext.toLowerCase()}`)
    } else {
      console.log(mytext.toFixed())
    }

  }

  greeting('asa')
  greeting(12.12)

})()
