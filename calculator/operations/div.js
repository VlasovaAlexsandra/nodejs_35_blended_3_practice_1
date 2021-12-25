
const div = (numbersNew, operation) => {
    if (operation === 'div') {
        const result = numbersNew.reduce((acc, el) => { return acc / el })
        console.log(result);
    }
}

module.exports = div