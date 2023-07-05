import axios, {type AxiosInstance} from 'axios';
import {config} from '@/config';

const apiUrl = config.apiUrl;

let inMemoryAxiosInstance: AxiosInstance;

const defaultConfig = {
  baseURL: apiUrl || 'http://localhost:3000',
  timeout: Number(import.meta.env.VUE_APP_TIMEOUT) || 10000,
  headers: {},
};

/**
 * Create a new Axios custom instance
 */
export const createNewInstance = (newConfig = {}): AxiosInstance => {
  const config = {...defaultConfig, ...newConfig};
  const instance = axios.create(config);
  inMemoryAxiosInstance = instance;
  return instance;
};


export {inMemoryAxiosInstance as axios};
