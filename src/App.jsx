import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Travel Tracker</h1>
      

<div className='table'> 
<table class="table">
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
      <th scope="row">1</th>
      {/* Departure Airport */}
      <td>Mark</td>
    {/* Arrival Airport */}
      <td>Otto</td>
    {/* Departure Time */}
      <td>@mdo</td>
    {/* Arrival Time */}
      <td>@mdo</td>
    </tr>
  
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>












      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
