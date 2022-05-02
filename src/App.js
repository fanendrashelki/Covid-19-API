import { useEffect, useState } from "react";



function App() {
  const [Data, setData] = useState([]);

  const getcovidData = async () => {
    const res = await fetch('https://data.covid19india.org/data.json');
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
  }

  useEffect(() => {
    getcovidData()
  },[]);
  return (
    <div className="container overflow-auto">
      <h1 className="text-center mt-4 mb-5 ">India covid-19 Dashboard</h1>
      <div className=" box-shadow">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>State</th>
              <th>Active</th>
              <th>Confirmed</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>Last Updated Time</th>
            </tr>
          </thead>
          <tbody>
            {
              Data.map((CurElem, index) => {
                return (
                  <tr key={index}>
                    <td>{CurElem.state}</td>
                    <td>{CurElem.active}</td>
                    <td>{CurElem.confirmed}</td>
                    <td>{CurElem.deaths}</td>
                    <td>{CurElem.recovered}</td>
                    <td>{CurElem.lastupdatedtime}</td>
                  </tr>
                );
              })}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
