import axios from "axios";

let defautRequestConfig = {
  baseURL: "/",
};

const defaultRestApi = axios.create(defautRequestConfig);

defaultRestApi.interceptors.request.use(
  function (config) {
    config.withCredentials = true;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default defaultRestApi;
