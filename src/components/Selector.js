import React from "react";
import TICKERS from "../constants/tickers";

export const Selector = ({ handleChange }) => {
  const tickers = TICKERS;

  return (
    <select onChange={handleChange}>
      <option key="" value="">
        --Select a Company--
      </option>
      {tickers.map((ticker) => (
        <option key={ticker} value={ticker}>
          {ticker}
        </option>
      ))}
    </select>
  );
};
