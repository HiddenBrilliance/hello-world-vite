import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { flightsInfoArray } from './flight-info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<header>    

<div className='header-info'>
      <h1>Travel Tracker</h1>
<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
</div>
</header>  


<div className='table'> 
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
    
    <tr>
      {/* Should display flight number with brand first i.e DL7077 */}
      <th scope="row">
      
       <td> 
        
        {flightsInfoArray.map(function(flight) {
      return (
        <div>
          {flight.flight_number}
        </div>
      );
    })} </td>


    
    </th>
      {/* Departure Airport */}
      <td> 
        
        {flightsInfoArray.map(function(flight) {
      return (
        <div>
          {flight.departure_airport}
        </div>
      );
    })} </td>
    {/* Arrival Airport */}
    <td> 
        
        {flightsInfoArray.map(function(flight) {
      return (
        <div>
          {flight.arrival_airport}
        </div>
      );
    })} </td>
    {/* Departure Time */}
    <td> 
        
        {flightsInfoArray.map(function(flight) {
      return (
        <div>
          {flight.departure_time}
        </div>
      );
    })} </td>
    {/* Arrival Time */}
    <td> 
        
        {flightsInfoArray.map(function(flight) {
      return (
        <div>
          {flight.arrival_time}
        </div>
      );
    })} </td>
    </tr>
  
   
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
  )
}

export default App
