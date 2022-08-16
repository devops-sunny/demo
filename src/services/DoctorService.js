import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";
let URL = API_URL + "doctor/";

export const getDoctor = () => {
  return ApiService.get(URL);
};

export const addDoctor = (data) => {
  return ApiService.post(URL, data);
};

export const updateDoctor = (data) => {
  return ApiService.put(URL, data);
};

export const deleteDoctor = (id) => {
  return ApiService.Delete(URL + `${id}`);
};
