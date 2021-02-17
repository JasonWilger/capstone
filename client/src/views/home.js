import './home.css';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button'


const Home = () => {

  const [chartData, setChartData] = useState({})
    
  const chart = () => {
      setChartData({
          labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
          dataSets: [
              {
                  label: 'chart title',
                  data: [.2, .5, 61, 35, 12],
                  backgroundColor: ['green'],
                  borderWidth: 4
              }
          ]

      })
  }

  useEffect(() => {
      chart()
  }, [])

  return (

    <div className="mainContent">
      <div>
        <h1 id="title">Overall Data</h1>
      </div>
      <div className="chartButtons">
      <Button id="button" variant="" href="#">Chart 1</Button> 
      <Button id="button" variant="" href="#">Chart 2</Button> 
      <Button id="button" variant="" href="#">Chart 3</Button> 
      </div>
      <div className="charts">
        <Line data={chartData} />
      </div>
    </div>

  );
  
}

export default Home;
