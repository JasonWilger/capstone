import './dock.css';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from "axios";

// components
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import DockList from '../components/dockList';



const Dock = () => {

  // code for chart
  const [chartData, setChartData] = useState({})
  const [Price, setPrice] = useState([]);
  const [Quantity, setQuantity] = useState([]);
    
  const chart = () => {
    let Price = [];
    let Quantity = [];
    axios
      .get("https://the--pantry.herokuapp.com/api/item")
      .then(res => {
        console.log(res);
        for (const dataObj of res.data) {
          Price.push(parseInt(dataObj.price));
          Quantity.push(parseInt(dataObj.quantity));
        }
      setChartData({
      labels: [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 10,
        11, 12, 13, 14, 15,
        16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
        26, 27, 28, 29, 30,
        31, 32, 33, 34, 35,
        36, 37, 38, 39, 40,
        41, 42, 43, 44, 45,
        46, 47, 48, 49, 50
      ],
      datasets: [
        {
          label: 'Price',
          data: Price,
          backgroundColor: "rgba(123, 239, 178, .3)",
          borderColor: 'rgba(123, 239, 178, 1)',
        },
        {
          label: 'Quantity',
          data: Quantity,
          backgroundColor: "rgba(25, 181, 254, 0.3)",
          borderColor: 'rgba(25, 181, 254, 1)',
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

          {/* main chart area */}
          <div className="chartMain">

            <Line data={chartData} options={{
              responsive: true,
              title: {text: 'Average of 50', display: true},
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

            <h1 id="breakTitle">What am I looking at?</h1>

            <div id="Spending">
              <h3>Price</h3>
              <div>
                The <b>GREEN LINE</b> is there to help you see the price of the items
                you purchased. We want to help you see the trends in your spending along
                with any high spikes in price.
              </div>
            </div>

            <div id="Quantity">
              <h3>Quantity</h3>
              <div>
              Managing you grocery list can be a pain. The <b>BLUE LINE</b> represents
              the quantity of the items you added to your list.
              We want to help you see how many of each item you purchase regularly after
              a visit to the store.
              </div>
            </div>

          </div>

          <DockList />

          {/* end breakdown section */}

        </div>

    <Footer />
    </div>

  );
  
};

export default Dock;
