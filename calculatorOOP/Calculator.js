class Calculator {
    constructor(numberNew, operation) {
        this.numberNew = numberNew,
            this.operation = operation
    }
    actionHandler = (numbersNew, operation) => {
        switch (operation) {
            case 'sum':
                this.sum(numbersNew, operation)
                break
            case 'sub':
                this.sub(numbersNew, operation)
                break
            case 'mult':
                this.mult(numbersNew, operation)
                break
            case 'div':
                this.div(numbersNew, operation)
                break
            default:
                console.log("Неизвестный тип операции");
                break
        }
    }

    sum = (numbersNew, operation) => {
        if (operation === 'sum') {
            const result = numbersNew.reduce((acc, el) => { return acc + el }, 0)
            console.log(result);
        }
    }

    sub = (numbersNew, operation) => {
        if (operation === 'sub') {
            const result = numbersNew.reduce((acc, el) => { return acc - el })
            console.log(result);
        }
    }

    mult = (numbersNew, operation) => {
        if (operation === 'mult') {
            const result = numbersNew.reduce((acc, el) => { return acc * el })
            console.log(result);
        }
    }

    div = (numbersNew, operation) => {
        if (operation === 'div') {
            const result = numbersNew.reduce((acc, el) => { return acc / el })
            console.log(result);
        }
    }

    init = () => {
        this.actionHandler(this.numberNew, this.operation)
    }
}

let [operation, ...numbers] = process.argv.slice(2)

const numbersNew = numbers.map((number) => Number(number))

module.exports = new Calculator(numbersNew, operation).init()