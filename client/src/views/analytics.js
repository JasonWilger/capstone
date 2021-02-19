import './analytics.css';
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'


const Analytics = () => {
  const [open, setOpen] = useState(false);


  return (
    <div>
    <div>
        Analytics
      </div>
        <>
      <Table striped bordered hover>
        <thead id="example-table">
          <tr>
            <th>List</th>
            <th>Item Name</th>
            <th>Type</th>
            <th>Food Group</th>
            <th>Quantity</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>F</td>
            <td>Otto</td>
            <td>meat</td>
            <td>23</td>
            <td>"hfgjhgj"</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>dairy</td>
            <td>56</td>
            <td>"hfgjhgj"</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>vegetable</td>
            <td>5</td>
            <td>"hfgjhgj"</td>
          </tr>
        </tbody>
      </Table>
    </>
    </div>
  );
  
}

export default Analytics;