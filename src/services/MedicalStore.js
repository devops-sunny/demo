import ApiService from "./ApiService";
import { API_URL } from "./AxiosInterceptor";
let URL = API_URL + "MedicalStore/";

export const getMedicalsList = () => {
  return ApiService.get(URL);
};

export const updateMedicalList = (data, options = null) => {
  return ApiService.put(URL,data, options);
};

export const deleteMedicalList = (id) => {
  return ApiService.Delete(URL + `${id}`);
};

export const addMedicalList = (data, options = null) => {
  return ApiService.post(URL,data, options);
};
