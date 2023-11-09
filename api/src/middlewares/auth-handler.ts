export const authHandler = async (decoded, request) => {
    return { isValid: true, token: decoded };
};
