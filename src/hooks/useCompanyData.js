import { useEffect, useState } from "react";
import { getCompanyInfo, getStockDailyData } from "../utility/api";
import preprocess from "../utility/preprocess";
import summarizeData from "../utility/summarize";

const useCompanyData = (company) => {
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    const getCompanyData = async () => {
      const stockResponse = await getStockDailyData(company);
      const companyResponse = await getCompanyInfo(company);
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

const getCompanyName = ({ data }) => data[0].companyName;

export default useCompanyData;
