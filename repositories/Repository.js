import axios from "axios";
const api = axios.create ({
    baseURL: 'http://localhost:8000/api/',
    headers: { 'Accept': 'application/json'}
})

api.interceptors.request.use(
    config => {
      const token = localStorage.getItem("auth._token.local");
      if (token) {
        config.headers.common['Authorization'] = `${token}`
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  export default api;