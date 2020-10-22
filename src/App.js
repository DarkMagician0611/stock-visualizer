import React, { useEffect, useState } from "react";
import { getStockDailyData } from "./api";
import "./App.css";

function App() {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    getStockDailyData("MSFT")
      .then(({ data }) => {
        const timeSeries = data["Time Series (Daily)"];
        let timeSeriesList = [];
        for (const date in timeSeries) {
          timeSeriesList.push({ date, ...timeSeries[date] });
        }
        setStockData(timeSeriesList);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      {stockData && stockData.map((data) => <div>{JSON.stringify(data)}</div>)}
    </div>
  );
}

export default App;
