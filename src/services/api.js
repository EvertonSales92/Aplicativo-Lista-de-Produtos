import axios from 'axios';

const api = axios.create({
    baseURL: 'faus.com.br/recursos/c/dmairr/api',
});

export default api;