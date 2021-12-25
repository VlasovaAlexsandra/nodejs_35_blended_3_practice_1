
const mult = (numbersNew, operation) => {
    if (operation === 'mult') {
        const result = numbersNew.reduce((acc, el) => { return acc * el })
        console.log(result);
    }
}

module.exports = mult