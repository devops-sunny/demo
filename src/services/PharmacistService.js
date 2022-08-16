import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";
let URL = API_URL + "pharmacist/";

export const getPharmacist = () => {
  return ApiService.get(URL);
};

export const getPharmacistById = (id) => {
  return ApiService.get(URL + `${id}`);
};

export const addPharmacist = (data) => {
  return ApiService.post(URL, data);
};

export const updatePharmacist = (data) => {
  return ApiService.put(URL, data);
};

export const deletePharmacist = (id) => {
  return ApiService.Delete(URL + `${id}`);
};
