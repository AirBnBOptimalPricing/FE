export const capitalize = (text = '') => {
    /**
     * @params text string
     * text is a string that gets entered to be capitalized
     *
     * @returns string
     * text modified so that the first character is uppercase
     */

    const firstLetter = text.slice(0, 1).toUpperCase();
    const remainingLetters = text.slice(1);

    return firstLetter.concat(remainingLetters);
};
