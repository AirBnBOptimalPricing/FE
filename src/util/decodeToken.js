import { decode } from 'jsonwebtoken';

export const decodeToken = token => {
    const { iat, userId, userId: id } = decode(token);
    return { id };
};
