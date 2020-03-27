export const withToken = () => {
    const token = localStorage.getItem('token');

    const setToken = (key, value) => {
        localStorage.setItem(key, value);
    };

    return [token, setToken];
};
