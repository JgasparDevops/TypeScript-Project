(()=> {
  // let myNumber: number
  // let myString: string

  let myNull: null = null
  let myUndefined: undefined = undefined

  let myNumber: number | null = null
  myNumber = 12

  let myString: string | undefined = undefined
  myString = 'ass'

  function hi(name: string | null){
    let hello = 'Hola '
    if(name){
      hello += 'name'
    }else {
      hello += 'nobody'
    }

    console.log(hello)
  }


  function hiv1(name: string | null){
    let hello = 'Hola '
    hello += name?.toLocaleLowerCase() || 'nobody'
    console.log(hello)
  }

  hiv1('nicolas')
  hiv1(null)
})()
