import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { flights } from "./flightsMockData";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = () => {
    return flights.filter((flight) =>
      flight.flight_number.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderDate = (date) => {
    // TODO: figure out why this method is failing
    return Intl.DateTimeFormat(date);
  };

  return (
    <>
      <header>
        <input
          placeholder="Enter Flight #"
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </header>

      <div className="table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Flight Number</th>
              <th scope="col">Departure Airport</th>
              <th scope="col">Arrival Airport</th>
              <th scope="col">Departure Time</th>
              <th scope="col">Arrival Time</th>
            </tr>
          </thead>
          <tbody>
            {/* Should display flight number with brand first i.e DL7077 */}
            {filteredResults().map(function (flight) {
              return (
                //row
                <tr>
                  <td>{flight.flight_number}</td>
                  <td>{flight.departure_airport}</td>
                  <td>{flight.arrival_airport}</td>
                  <td>{flight.departure_time}</td>
                  <td>{renderDate(flight.arrival_time)}</td>
                </tr>
              );
            })}{" "}
          </tbody>
        </table>
      </div>

      {/* Not sure what to do with this yet */}
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
