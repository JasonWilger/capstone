import './dock.css';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button'


// components
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Quick from '../components/quick';


const Dock = () => {

  // code for chart
  const [chartData, setChartData] = useState({})
    
  const chart = () => {
      setChartData({
      labels: [
        '0', 'week 1', 'week 2', 'week 3', 'week 4'
      ],
      datasets: [
        {
          label: 'Dry',
          data: [12, 50, 3, 5, 2, 3],
          fill: false,
          backgroundColor: 'black',
          borderColor: '#E9DDBE',
        },
        {
          label: 'Cold',
          data: [5, 65, 16, 18, 26, 3],
          fill: false,
          backgroundColor: 'black',
          borderColor: '#1529F0',
        },
        {
          label: 'Frozen',
          data: [7, 78, 25, 45, 2, 16],
          fill: false,
          backgroundColor: 'black',
          borderColor: '#15BEF0',
        },
      ],
    })
  }

  useEffect(() => {
      chart()
  }, [])
  // end code for chart


  return (
      <div>
      <NavBar />
      <Quick />
      
        <div className="mainContent">
          <div>
            <h1 id="title">Overview</h1>
          </div>
          <div className="chartButtons">
          <Button id="button" variant="" href="#">Line</Button> 
          <Button id="button" variant="" href="#">Pie</Button> 
          <Button id="button" variant="" href="#">Bar</Button> 
          </div>

          {/* main chart area */}
          <div className="chartMain">
            <Line data={chartData} options={{
              responsive: true,
              title: {text: 'Monthly Summary', display: true},
              scales: {

                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 75,
                      beginAtZero: true,
                    },
                  },
                ],

              }
            }}/>
          </div>
          {/* end main chart area */}

          {/* breakdown section */}
          <div id="breakDown">

            <div id="dry">
              <h3>Dry</h3>
              <div>
                A chart for dry
              </div>
            </div>

            <div id="cold">
              <h3>Cold</h3>
              <div>
              A chart for cold
              </div>
            </div>

            <div id="frozen">
              <h3>Frozen</h3>
              <div>
              A chart for frozen
              </div>
            </div>

          </div>
          {/* end breakdown section */}
        </div>

    <Footer />
    </div>

  );
  
}

export default Dock;
