import React, { useState } from "react";
import "./App.css";
import { Company } from "./components/Company";
import { Selector } from "./components/Selector";

function App() {
  const [company, setCompany] = useState("");

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <div className="app">
      <Selector handleChange={handleChange} />
      {company && <Company company={company} />}
    </div>
  );
}

export default App;
