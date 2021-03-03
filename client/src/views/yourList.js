import './yourList.css';
import React, { Component } from "react";

// components
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import NewItem from '../components/newItem';
import SearchItems from '../components/searchItems';


const YourList = () => {

  return (

    <div>
      <NavBar />
        <div className="mainContent">
          <h1 id="mainTitle">Your Grocery List</h1>
          <NewItem />
          <SearchItems />
        </div>
      <Footer />
    </div>
    

  );
  
}

export default YourList;