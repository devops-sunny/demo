import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";
let URL = API_URL + "specialization/";

export const getSpecialization = () => {
  return ApiService.get(URL);
};

export const getSpecializationById = (id) => {
  return ApiService.get(URL + `${id}`);
};

export const addSpecialization = (data) => {
  return ApiService.post(URL, data);
};

export const updateSpecialization = (data) => {
  return ApiService.put(URL, data);
};

export const deleteSpecialization = (id) => {
  return ApiService.Delete(URL + `${id}`);
};
