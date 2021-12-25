const { sum, sub, mult, div } = require('./operations')

const actionHandler = (numbersNew, operation) => {
    switch (operation) {
        case 'sum':
            sum(numbersNew, operation)
            break
        case 'sub':
            sub(numbersNew, operation)
            break
        case 'mult':
            mult(numbersNew, operation)
            break
        case 'div':
            div(numbersNew, operation)
            break
        default:
            console.log("Неизвестный тип операции");
            break
    }
}

module.exports = actionHandler
