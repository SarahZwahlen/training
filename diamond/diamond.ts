const FirstAlphabetASCIIValue = 65;

export const printDiamond = (letter: string) => {
    if (letter.length !== 1) {
        return 'La chaine est trop longue';
    }

    createDiamond(letter).forEach((line) => console.log(line));
};

const createDiamond = (letter: string): string[] => {
    const diamondHalfHeight = getAlphabetIndex(letter);

    const diamondUpperHalf: string[] = [];

    for (let i = 1; i <= diamondHalfHeight; i++) {
        diamondUpperHalf.push(
            createLine(getLetterfromIndex(i), getAlphabetIndex(letter))
        );
    }

    const diamondLowerHalf: string[] = [...diamondUpperHalf].reverse();
    diamondLowerHalf.shift();

    return [...diamondUpperHalf, ...diamondLowerHalf];
};

const createLine = (letter: string, alphaIndexRef: number): string => {
    let rightPart: string[] = [];

    for (let i = 1; i <= alphaIndexRef; i++) {
        rightPart.push(' ');
    }

    const letterIndex = getAlphabetIndex(letter);
    rightPart[letterIndex - 1] = letter;

    const leftPart = [...rightPart].reverse();
    leftPart.pop();

    return [...leftPart, ...rightPart].join('');
};

const getASCIIValue = (letter: string): number => {
    return letter.toLocaleUpperCase().charCodeAt(0);
};

const getAlphabetIndex = (letter: string): number => {
    return getASCIIValue(letter) - FirstAlphabetASCIIValue + 1;
};

const getLetterfromIndex = (index: number): string => {
    return String.fromCharCode(FirstAlphabetASCIIValue + index - 1);
};

printDiamond('Z');
