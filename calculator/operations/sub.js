
const sub = (numbersNew, operation) => {
    if (operation === 'sub') {
        const result = numbersNew.reduce((acc, el) => { return acc - el })
        console.log(result);
    }
}

module.exports = sub