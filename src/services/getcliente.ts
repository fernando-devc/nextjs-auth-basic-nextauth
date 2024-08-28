import axios from 'axios';


const baseURL = 'http://localhost:8000';

const ApiClient = () => {
    const defaultOptions = {
        baseURL,
    };

    const instance = axios.create(defaultOptions);

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log(`error`, error);
        },
    );

    return instance;
};

export default ApiClient();