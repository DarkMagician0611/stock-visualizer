import axios from "axios";
import { alphaVantage, financialModelling } from "../constants/apiInfo";

export const getStockDailyData = (company) => {
  return axios.get(
    `${alphaVantage.urlPrefix}?function=TIME_SERIES_DAILY&symbol=${company}&apikey=${alphaVantage.apiKey}`
  );
};

export const getCompanyInfo = (company) => {
  return axios.get(
    `${financialModelling.urlPrefix}/${company}?apikey=${financialModelling.apiKey}`
  );
};
