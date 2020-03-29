import { decode } from 'jsonwebtoken';

export const decodeToken = token => {
    const decoded = decode(token);
    return decoded;
};
