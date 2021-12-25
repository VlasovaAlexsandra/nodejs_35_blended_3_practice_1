// const operations = require('./operations')
// console.log(operations);
// operations.sum()
// operations.sub()
// operations.mult()
// operations.div()

// const { sum, sub, mult, div } = require('./operations')
// console.log(sum);

const actionHandler = require('./actionHandler')

let [operation, ...numbers] = process.argv.slice(2)

const numbersNew = numbers.map((number) => Number(number))

actionHandler(numbersNew, operation)
