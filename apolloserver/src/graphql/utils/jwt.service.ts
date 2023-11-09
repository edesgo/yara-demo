import * as jwt from 'jsonwebtoken';
const secret = process.env.API_JWT_SECRET  
/**
 * Create JWT token for the API request
 * @param secret 
 * @returns 
 */
export async function issueToken(secret: string) {
    return jwt.sign({}, secret, {expiresIn: 5});
}

