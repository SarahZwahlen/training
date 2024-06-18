import { isPalindrom } from './palindrome';

describe('Palindrome', () => {
    test('Palindrom has an even length', () => {
        const palindrom = 'nabban';

        expect(isPalindrom(palindrom)).toBeTruthy();
    });

    test('Palindrom has an even length', () => {
        const palindrom = 'naban';

        expect(isPalindrom(palindrom)).toBeTruthy();
    });

    test('text is not a palindrom', () => {
        const notAPalindrom = 'wertzuiop';

        expect(isPalindrom(notAPalindrom)).toBeFalsy();
    });

    test('The text is a phrase', () => {
        const palindrom = 'noel a trop par rapport a leon';
        expect(isPalindrom(palindrom)).toBeTruthy();
    });

    test('text contain capital letters', () => {
        const palindrom = 'Engage le jeu que je le gagne';

        expect(isPalindrom(palindrom)).toBeTruthy();
    });

    test('Text contain accent letters', () => {
        const palindrom = 'Noël a trop par rapport à Léon';

        expect(isPalindrom(palindrom)).toBeTruthy();
    });
});
