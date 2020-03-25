export const withToken = () => {
    const token = localStorage.getItem('token');
    return token;
};
