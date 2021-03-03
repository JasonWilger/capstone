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
  const [Price, setPrice] = useState([]);
  const [Quantity, setQuantity] = useState([]);
    
  const chart = () => {
    let Price = [];
    let Quantity = [];
    axios
      .get("http://localhost:9000/api/item")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          Price.push(parseInt(dataObj.price));
          Quantity.push(parseInt(dataObj.quantity));
        }
      setChartData({
      labels: [1, 2, 3, 4],
      datasets: [
        {
          label: 'Spending',
          data: Price,
          fill: false,
          backgroundColor: 'black',
          borderColor: '#85bb65',
        },
        {
          label: 'List Items',
          data: Quantity,
          fill: false,
          backgroundColor: 'black',
          borderColor: '#1529F0',
        }
      ],
    });
  })
  .catch(err => {
    console.log(err);
  });
  console.log(Price, Quantity);
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
