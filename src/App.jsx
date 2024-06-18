import { useState, useEffect } from "react";
import Data from "./Data";
import CompanyName from "./Company";
import CompanyDetail from "./CompanyDetail";

function App() {
  const [jobs, setJobs] = useState(Data);
  const [value, setValue] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <CompanyName jobs={jobs} value={value} setValue={setValue} />
        <CompanyDetail jobs={jobs} value={value} setValue={setValue} />
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
