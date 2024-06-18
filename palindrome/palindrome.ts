export const isPalindrom = (text: string): boolean => {
    const filterString = replaceAccentuedLetters(
        text
            .split('')
            .filter((character) => character !== ' ')
            .map((letter) => letter.toLocaleLowerCase())
    ).join('');

    const isStringEven = filterString.length % 2 === 0;

    const firstPart = filterString.substring(0, filterString.length / 2);
    const secondPart = filterString
        .substring(
            isStringEven ? filterString.length / 2 : filterString.length / 2 + 1
        )
        .split('')
        .reverse()
        .join('');

    return firstPart === secondPart;
};

const replaceAccentuedLetters = (letters: string[]): string[] => {
    const accentedLetters: Record<string, string[]> = {
        a: ['à', 'à', 'â', 'ä'],
        e: ['é', 'è', 'ë', 'ê'],
        i: ['í', 'î'],
        o: ['ò', 'ó', 'ô', 'ö'],
        u: ['ù', 'ú', 'û', 'ü']
    };

    return letters.map((letter) => {
        let remappedLetter = letter;

        for (let key in accentedLetters) {
            if (accentedLetters[key].includes(letter)) {
                remappedLetter = key;
            }
        }

        return remappedLetter;
    });
};
