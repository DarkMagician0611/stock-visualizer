import axios from "axios";
import { alphaVantage } from "../constants/apiInfo";

export const getDataFromAPI = (company, type) => {
  return axios.get(
    `${alphaVantage.urlPrefix}?function=${type}&symbol=${company}&apikey=${alphaVantage.apiKey}`
  );
};
