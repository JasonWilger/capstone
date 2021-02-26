import './yourList.css';
import React, { Component } from "react";

// components
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Quick from '../components/quick';
import NewList from '../components/newList';
import SearchLists from '../components/searchLists';


const YourList = () => {

  return (

    <div>
      <NavBar />
      <Quick />

        <div id="mainContent">
          <div id="mainTitle">Your Grocery Lists</div>
          <NewList />
          <SearchLists />
        </div>
      <Footer />
    </div>
    

  );
  
}

export default YourList;