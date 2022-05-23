let myDynamicVar: any
myDynamicVar = 100
myDynamicVar = null
myDynamicVar = {
}
myDynamicVar = 'string'

const rta = (myDynamicVar as string).toLowerCase()
console.log(rta)

myDynamicVar = 1212
const rta1 = (<number>myDynamicVar).toFixed()
console.log(rta1)
