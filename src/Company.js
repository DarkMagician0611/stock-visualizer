import React, { useEffect, useState } from "react";
import { getStockDailyData } from "./api";

const useStockData = (company) => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    getStockDailyData(company)
      .then(({ data }) => {
        console.log(data);
        const timeSeries = data["Time Series (Daily)"];
        let timeSeriesList = [];
        for (const date in timeSeries) {
          timeSeriesList.push({ date, ...timeSeries[date] });
        }
        setStockData(timeSeriesList);
      })
      .catch((error) => console.error(error));
  }, [company]);

  return stockData;
};

export const Company = ({ company }) => {
  const stockData = useStockData(company);

  return (
    <div>
      <h2>{company}</h2>
      <div>
        {stockData &&
          stockData.map((data) => (
            <div key={data.date}>{JSON.stringify(data)}</div>
          ))}
      </div>
    </div>
  );
};
