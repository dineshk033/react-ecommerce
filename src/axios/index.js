import axios from "axios";

/**
 * create axios instance
 * add globally baseurl in axios
 * same instance hereafter we can use in ourproject refer SearchPage
 */
const AxiosInstance = axios.create({ baseURL: "https://dummyjson.com/" });

// Add a request interceptor
AxiosInstance.interceptors.request.use(
  function (request) {
    // Add token here
    let token = localStorage.getItem("jwt_token");
    if (token) {
      token = JSON.parse(token).token;
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    return request;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default AxiosInstance;
