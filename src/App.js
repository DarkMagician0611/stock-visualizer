import React, { useState } from "react";
import "./App.css";
import { Company } from "./Company";
import TICKERS from "./data/tickers";

function App() {
  const tickers = TICKERS;
  const [company, setCompany] = useState(tickers[0]);

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <div className="app">
      <select onChange={handleChange}>
        {tickers.map((ticker) => (
          <option value={ticker}>{ticker}</option>
        ))}
      </select>
      <Company company={company} />
    </div>
  );
}

export default App;
