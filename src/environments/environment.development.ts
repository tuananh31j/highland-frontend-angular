// const API_CLOUD = 'https://highland-coffee.onrender.com/api';
const API_LOCAL = 'http://localhost:3004/api';
export const environment = {
    production: false,
    product: `${API_LOCAL}/products`,
    customer: `${API_LOCAL}/customers`,
    auth: `${API_LOCAL}/auth`,
    category: `${API_LOCAL}/categories`,
};
