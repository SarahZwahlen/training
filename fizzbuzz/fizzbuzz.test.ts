import { fizzBuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
    test('happy path', () => {
        const allResult = () => {
            const result = [];
            for (let i = 1; i <= 100; i++) {
                result.push(fizzBuzz(i));
            }
            console.log('result', result);
        };

        allResult();

        expect(fizzBuzz(3)).toBe('fizz');
        expect(fizzBuzz(5)).toBe('buzz');
        expect(fizzBuzz(15)).toBe('fizzbuzz');
        expect(fizzBuzz(8)).toBe(8);
        expect(fizzBuzz(32)).toBe('fizz');
        expect(fizzBuzz(52)).toBe('buzz');
    });
});
