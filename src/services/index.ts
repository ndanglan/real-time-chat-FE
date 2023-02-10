import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { EAuthToken } from '../variables';
import { TAuthToken } from '../interfaces/auth-interfaces';
import { handleStorageToken } from '../utils/storage';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

let isRefreshing = false;
let failedQueue: any = [];

const requestHandler = (config: AxiosRequestConfig) => {
  const atk = localStorage.getItem(EAuthToken.ACCESS_TOKEN);

  const configHeaders = {
    Authorization: `Bearer ${atk}`,
    ...config.headers,
  };
  config.headers = configHeaders;
  config.params = {
    ...config.params,
  };

  return config as InternalAxiosRequestConfig;
};

const processQueue = (error: any, token: string = '') => {
  failedQueue.forEach((prom: any) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const responseErrorHandler = async (err: AxiosError) => {
  const originalRequest: any = err.config;
  if (err?.response?.status === 401) {
    isRefreshing = true;

    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        axios
          .create({ baseURL: process.env.REACT_APP_API_URL })
          .post('/api/firebase/auth/refresh-token', {
            token: localStorage.getItem(EAuthToken.REFRESH_TOKEN),
          })
          .then(({ data }: AxiosResponse<TAuthToken>) => {
            apiClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.accessToken;
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: 'Bearer ' + data.accessToken,
            };
            data.accessToken && processQueue(null, data.accessToken);
            handleStorageToken(data);
            resolve(window.location.reload());
          })
          .catch((err) => {
            processQueue(err, '');
            localStorage.clear();
            // window.location.pathname = RoutePaths.SIGN_IN;
            reject(err);
          })
          .then(() => {
            isRefreshing = false;
          });
      });
    }
  }

  const data: any = err?.response?.data;
  const message = data?.message;

  if (message) throw new Error(message);
  return Promise.reject(err);
};

apiClient.interceptors.request.use(requestHandler, (err) => Promise.reject(err));
apiClient.interceptors.response.use((response: any) => response, responseErrorHandler);
export default apiClient;
