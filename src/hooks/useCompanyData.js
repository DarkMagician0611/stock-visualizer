import { useEffect, useState } from "react";
import { functions } from "../constants/apiInfo";
import preprocess from "../utility/preprocess";
import { getDataFromAPI } from "../utility/requests";
import summarizeData from "../utility/summarize";

const useCompanyData = (company) => {
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    const getCompanyData = async () => {
      const stockResponse = await getDataFromAPI(
        company,
        functions.dailyStockPrice
      );
      const companyResponse = await getDataFromAPI(company, functions.overview);
      setCompanyData({
        ...extractStockData(stockResponse),
        companyName: getCompanyName(companyResponse),
      });
    };

    getCompanyData();
  }, [company]);

  return companyData;
};

const extractStockData = ({ data }) => {
  const timeSeries = data["Time Series (Daily)"];
  let timeSeriesList = [];
  for (const date in timeSeries) {
    timeSeriesList.push({ date, ...timeSeries[date] });
  }
  timeSeriesList = preprocess(timeSeriesList);
  const dataSummary = summarizeData(timeSeriesList);
  return { dataSummary, timeSeriesList };
};

const getCompanyName = ({ data }) => data.Name;

export default useCompanyData;
