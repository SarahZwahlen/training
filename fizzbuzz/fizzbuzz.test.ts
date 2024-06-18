import { fizzBuzz } from './fizzbuzz';

describe('fizzbuzz', () => {
    test('Is dividable by 3', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    });

    test('Is dividable by 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    });

    test('Return the value when conditions are not completed', () => {
        expect(fizzBuzz(8)).toBe(8);
    });

    test('Number contains a 3', () => {
        expect(fizzBuzz(32)).toBe('fizz');
    });

    test('Number contains a 5', () => {
        expect(fizzBuzz(52)).toBe('buzz');
    });

    test('Number contains some 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
        expect(fizzBuzz(53)).toBe('buzzfizz');
        expect(fizzBuzz(353)).toBe('fizzbuzzfizz');
    });
});
