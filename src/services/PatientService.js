import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";
let URL = API_URL + "patient/";

export const getList = () => {
  return ApiService.get(URL);
};

export const updateList = (data, options = null) => {
  return ApiService.put(URL, data, options);
};

export const deleteList = (id) => {
  return ApiService.Delete(URL + `${id}`);
};

export const addList = (data, options = null) => {
  return ApiService.post(URL, data, options);
};

export const getPatientID = () => {
  return ApiService.get(URL + "patient/id");
};
