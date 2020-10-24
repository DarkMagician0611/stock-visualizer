const preprocess = (stockData) => {
  return stockData
    .map((data) =>
      formatDate(
        renameKey(
          data,
          ["1. open", "2. high", "3. low", "4. close", "5. volume"],
          ["open", "high", "low", "close", "volume"]
        )
      )
    )
    .reverse();
};

const renameKey = (object, keys, newKeys) => {
  const clonedObj = { ...object };
  keys.forEach((key, index) => {
    const targetKey = clonedObj[key];
    delete clonedObj[key];
    clonedObj[newKeys[index]] = targetKey;
  });
  return clonedObj;
};

const formatDate = (data) => {
  const date = new Date(data.date);
  data.date =
    date.getDate() + "-" + date.toLocaleString("default", { month: "short" });
  return data;
};

export default preprocess;
