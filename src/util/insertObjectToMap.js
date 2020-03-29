import { undoMapObject, mapObject } from './';

export const insertObjectToMap = (object, map) => {
    const objectToArray = undoMapObject(map);
    const newMapObject = mapObject([...objectToArray, object]);
    return newMapObject;
};
