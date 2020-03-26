import { undoMapObject, mapObject } from './';

export const removeObjectFromMap = (id, map) => {
    const objectToArray = undoMapObject(map);
    const arrayWithoutId = objectToArray.filter(
        ({ id: propertyId }) => id !== propertyId,
    );
    return mapObject(arrayWithoutId);
};
