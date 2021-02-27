import './yourList.css';
import React, { Component } from "react";

// components
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Quick from '../components/quick';
import NewItem from '../components/newItem';
import SearchItems from '../components/searchItems';


const YourList = () => {

  return (

    <div>
      <NavBar />
      <Quick />

        <div id="mainContent">
          <div id="mainTitle">Your Grocery List</div>
          <NewItem />
          <SearchItems />
        </div>
      <Footer />
    </div>
    

  );
  
}

export default YourList;