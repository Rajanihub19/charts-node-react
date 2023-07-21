import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/allroutes';
import Chart from './components/charts/piechart';
import Barchart from './components/charts/bar';
import LineChart from './components/charts/line';
import Barchart1 from './components/charts/bar2';
import Piechart1 from './components/charts/piechart2';
// --------------------------------------------------------
function App() {

  return (

    <div className="App">
     
      <Chart />
      <Barchart />
      {/* <Barchart1 /> */}
      {/* <Piechart1 /> */}
      {/* <LineChart /> */}
    </div>
  )
}




export default App;







