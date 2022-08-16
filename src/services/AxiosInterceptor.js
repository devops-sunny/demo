import axios from "axios";

let API_URL = "http://prescription.php.dev.drcsystems.ooo/v1/";

let defaultOptions = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};
const axiosInstance = axios.create(defaultOptions);

const requestHandler = (request) => {
  request.headers["request-type"] = "web";
  const token = localStorage.getItem("token");
  if (token) request.headers["Token"] = `Bearer ${token}`;
  return request;
};

const responseHandler = (response) => {
  return response.data;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use((response) =>
  responseHandler(response)
);

export { API_URL, axiosInstance };
