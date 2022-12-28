import axios from 'axios';

export const httpService = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 3000,
});
