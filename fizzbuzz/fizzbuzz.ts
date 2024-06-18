export const fizzBuzz = (number: number) => {
    let result: string | void = '';
    result = isFizz(number);
    result = isBuzz(number, result);
    return result ? result : number;
};

const isFizz = (number: number): void | string => {
    const FIZZ = 'fizz';

    const text = number.toString().split('');
    if (number % 3 === 0 || text.includes('3')) {
        return FIZZ;
    }
    return '';
};

const isBuzz = (number: number, result: string | void): void | string => {
    const BUZZ = 'buzz';
    const text = number.toString().split('');
    if (number % 5 === 0 || text.includes('5')) {
        return result + BUZZ;
    }
    return result;
};


