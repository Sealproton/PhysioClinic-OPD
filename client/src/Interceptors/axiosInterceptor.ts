import axios, { AxiosRequestConfig, AxiosError } from 'axios';
function jwtInterceptor() {
  axios.interceptors.request.use((req) => {
    const token = window.localStorage.getItem('token');
    if (token) {
      (req as AxiosRequestConfig).headers = {
        ...(req as AxiosRequestConfig).headers,
        Authorization: `Bearer: ${token}`,
      };
    }
    return req;
  });

  axios.interceptors.response.use(
    (req) => {
      return req;
    },
    (error: AxiosError) => {
      if (
        error?.response?.status === 401 &&
        error?.response?.statusText === 'Unauthorized'
      ) {
        window.localStorage.removeItem('token');
        window.location.replace('/');
      }
      return Promise.reject(error);
    }
  );
}

export default jwtInterceptor;
