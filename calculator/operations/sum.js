

const sum = (numbersNew, operation) => {
    if (operation === 'sum') {
        const result = numbersNew.reduce((acc, el) => { return acc + el }, 0)
        console.log(result);
    }
}

module.exports = sum