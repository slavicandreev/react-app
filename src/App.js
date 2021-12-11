import React, { useState } from 'react';
import './App.css';
import BucketList from './components/BucketList';


function App() {

  return (
    <div className="bucket-app">
      <BucketList />
    </div>
    )
  // return (
  //   <div className="container">
  //     <div>
  //       <span>Enter your name: </span>
  //       <input onChange={(e) => setName(e.target.value)} />
  //     </div>
  //     <div>
  //       <span>What do you want to learn? </span>
  //       <input onChange={(e) => setTopic(e.target.value)} />
  //     </div>
  //     <hr />
  //     <Welcome name={name} topic={topic} />
  //   </div>
  // );
  // return (
  //   <div>
  //   <Header />
  //   <Navbar />
  //   <Card />
  //   <Card />
  //   <Card />
  // </div>
  //   // <div className="bucket-app">
  //   //   <SearchResultContainer />
  //   // </div>
  // );
}

export default App;
