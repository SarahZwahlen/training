enum FIZZBUZZ {
    fizz = 'fizz',
    buzz = 'buzz'
}

export const fizzBuzz = (number: number) => {
    const testFizz = compute(number, 3);
    const testBuzz = compute(number, 5);

    if (testFizz || testBuzz) {
        return testFizz + testBuzz;
    } else {
        return number;
    }
};

const compute = (number: number, target: 3 | 5): string => {
    const text = number.toString().split('');
    if (number % target === 0 || text.includes(target.toString())) {
        return target === 3 ? 'fizz' : 'buzz';
    }
    return '';
};
