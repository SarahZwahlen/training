type FIZZBUZZ = 'fizz' | 'buzz' | '';

export const fizzBuzz = (number: number) => {
    const testModuloFizz = testModulo(number, 3);
    const testModuloBuzz = testModulo(number, 5);
    const testContainerNumber = testContainTargetNumber(number);

    if (testModuloFizz || testModuloBuzz) {
        return testModuloFizz + testModuloBuzz;
    } else if (testContainerNumber) {
        return testContainerNumber;
    } else {
        return number;
    }
};

const testModulo = (number: number, target: number): FIZZBUZZ => {
    if (number % target === 0) {
        return target === 3 ? 'fizz' : 'buzz';
    }
    return '';
};

const testContainTargetNumber = (number: number): string => {
    return number
        .toString()
        .split('')
        .map((character) => {
            if (character === '3') {
                return 'fizz';
            }

            if (character === '5') {
                return 'buzz';
            }

            return '';
        })
        .join('');
};
