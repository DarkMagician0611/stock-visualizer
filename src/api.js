import axios from "axios";

const API_KEY = "1FOSNJ7885JNM7VO";

const URL_PREFIX =
  "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=1FOSNJ7885JNM7VO";

export const getStockDailyData = (company) => {
  return axios.get(
    `${URL_PREFIX}?function=TIME_SERIES_DAILY&symbol=${company}&apikey=${API_KEY}`
  );
};
