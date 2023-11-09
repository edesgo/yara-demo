import * as jwt from 'jsonwebtoken';
import * as config from 'config';
const secret = config.get<string>('app.jwtSecret');

export const issueToken = (expire) => {
    return jwt.sign({}, secret, { expiresIn: expire });
};

export const decodeToken = (token) => {
    return jwt.decode(token);
};
