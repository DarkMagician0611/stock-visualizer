const summarizeData = (stockData) => {
  const result = {};
  result["dateRange"] = [
    stockData[0].date,
    stockData[stockData.length - 1].date,
  ];
  for (const element of stockData) {
    for (const key in element) {
      if (key !== "date") {
        result[key] = result[key] ? result[key] + +element[key] : +element[key];
      }
    }
  }
  for (const key in result) {
    if (key !== "dateRange") {
      result[key] = (result[key] / stockData.length).toFixed(2);
    }
  }
  return result;
};

export default summarizeData;
