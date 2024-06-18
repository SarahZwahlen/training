import { findCombination } from './dark_thirteen';

describe('Dark thirteen test', () => {
    test('Happy path', () => {
        const list = [1, 22, 2, 17];

        expect(findCombination(list)).toEqual([[1, 2, 17]]);
    });
});
