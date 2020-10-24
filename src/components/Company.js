import React from "react";
import useCompanyData from "../hooks/useCompanyData";
import { Chart } from "./Chart";

export const Company = ({ company }) => {
  const { dataSummary, timeSeriesList, companyName } = useCompanyData(company);

  return (
    <div>
      <h2>{company}</h2>

      {timeSeriesList && (
        <div>
          <h3>{companyName}</h3>
          <pre>{JSON.stringify(dataSummary)}</pre>
          <Chart data={timeSeriesList} />
        </div>
      )}
    </div>
  );
};
