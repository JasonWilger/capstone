import './dock.css';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button'
import axios from "axios";

// components
import NavBar from '../components/navbar';
import Footer from '../components/footer';


const Dock = () => {

  // code for chart
  const [chartData, setChartData] = useState({})
  const [storeType, setStoreType] = useState([]);
  const [chartCold, setChartCold] = useState([]);
  const [chartFrozen, setChartFrozen] = useState([]);
    
  const chart = () => {
    let sType = [];
    let charCold = [];
    let charFroz = [];
    axios
      .get("http://localhost:9000/api/item")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          sType.push(parseInt(dataObj.storeType));
          charCold.push(parseInt(dataObj.storeType));
          charFroz.push(parseInt(dataObj.storeType));
        }
      setChartData({
      labels: [1, 2, 3, 4],
      datasets: [
        {
          label: 'Dry',
          data: sType,
          fill: false,
          backgroundColor: 'black',
          borderColor: '#E9DDBE',
        },
        {
          label: 'Cold',
          data: charCold,
          fill: false,
          backgroundColor: 'black',
          borderColor: '#1529F0',
        },
        {
          label: 'Frozen',
          data: charFroz,
          fill: false,
          backgroundColor: 'black',
          borderColor: '#15BEF0',
        },
      ],
    });
  })
  .catch(err => {
    console.log(err);
  });
  console.log(sType, charCold, charFroz);
  };

  useEffect(() => {
      chart();
  }, [])
  // end code for chart


  return (
      <div>
      <NavBar />
      
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
  
};

export default Dock;
