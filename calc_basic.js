// sum +
// sub -
// mult *
// div /

// if (5 > 1) {
//     console.log('ok');
// }

// console.log('calc_new');
// console.log('calc_basic');

// console.log(process.argv.slice(2));
// console.log(process.argv);

let [operation, ...numbers] = process.argv.slice(2)
console.log(operation);
// console.log(numbers);

const numbersNew = numbers.map((number) =>
    Number(number)
)
console.log(numbersNew);

// if (operation === 'sum') {
//     const result = numbersNew.reduce((acc, el) => { return acc + el }, 0)
//     console.log(result);
// }

// if (operation === 'sub') {
//     const result = numbersNew.reduce((acc, el) => { return acc - el })
//     console.log(result);
// }

// if (operation === 'mult') {
//     const result = numbersNew.reduce((acc, el) => { return acc * el })
//     console.log(result);
// }

// if (operation === 'div') {
//     const result = numbersNew.reduce((acc, el) => { return acc / el })
//     console.log(result);
// }

const sum = (numbersNew, operation) => {
    if (operation === 'sum') {
        const result = numbersNew.reduce((acc, el) => { return acc + el }, 0)
        console.log(result);
    }
}

const sub = (numbersNew, operation) => {
    if (operation === 'sub') {
        const result = numbersNew.reduce((acc, el) => { return acc - el })
        console.log(result);
    }
}

const mult = (numbersNew, operation) => {
    if (operation === 'mult') {
        const result = numbersNew.reduce((acc, el) => { return acc * el })
        console.log(result);
    }
}

const div = (numbersNew, operation) => {
    if (operation === 'div') {
        const result = numbersNew.reduce((acc, el) => { return acc / el })
        console.log(result);
    }
}

// switch (operation) {
//     case 'sum':
//         sum(numbersNew, operation)
//         break
//     case 'sub':
//         sub(numbersNew, operation)
//         break
//     case 'mult':
//         mult(numbersNew, operation)
//         break
//     case 'div':
//         div(numbersNew, operation)
//         break
//     default:
//         console.log("Неизвестный тип операции");
//         break
// }