const os = require('os')
let res = os.platform();
console.log(`Platform: ${res}`)


const my_math = require(`./my_math`)
let res1 = my_math.min(4, 10)
let res2 = my_math.add(4, 10)
console.log(`Res1 = ${res1}, Res2 = ${res2}`)

