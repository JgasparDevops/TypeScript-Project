(() => {
  type UserID = string | number
  let userId: UserID


  //literal types
  type Size = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Size
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'


  function greeting(userId: UserID, Size: Size) {
    if(typeof userId == 'string'){
      console.log(`string ${userId.toLowerCase()}`)
    }

  }

  greeting('asas', 'M')
})()
