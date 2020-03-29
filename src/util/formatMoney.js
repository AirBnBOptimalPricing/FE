export const formatMoney = value => {
    let parsed;
    try {
        parsed = parseFloat(value);
    } catch (error) {
        throw TypeError(
            `Expected: number, \nAttempted to cast Number.parseFloat to ${value} and was unsuccessful, please try again`,
        );
    }
    const splitted = parsed.toString().split('.');
    return [splitted[0], splitted[1].substr(0, 2)].join('.');
};
