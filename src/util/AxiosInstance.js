import axios from "axios";


const API_BASE_URL1 = 'https://ecommce-be.herokuapp.com/ecomm/api/v1/'
const API_BASE_URL2 = 'http://restapi.adequateshop.com/'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/josn';

export const AxiosInstance = axios.create({
   baseURL1 : API_BASE_URL1,
   baseURL2 : API_BASE_URL2,
   timeout: 5000,
})