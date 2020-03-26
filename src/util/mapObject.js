export const mapObject = (listOfObject = []) => {
    return listOfObject.reduce((prev, next) => {
        return {
            ...prev,
            [next.id]: {
                ...next,
            },
        };
    }, {});
};
