//Dans un tableau de nombre, trouver les combinaisons de trois nombres qui donnent 30

export const findCombination = (list: number[]): number[][] => {
    const toto = [];
    let acc = 0;

    for (let num of list) {
        acc += num;
        if (acc <= 30) {
            toto.push(num);
        }
    }

    return [toto];
};
