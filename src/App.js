import './App.css';
import React from 'react';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import {HomePage} from "./components/Header";
import {Footer} from "./components/Footer";
import {ContentOne} from "./components/content";
import {About} from "./components/About";
import {Clients} from "./components/Clients";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <HomePage/>
            <Route exact path="/" render={()=><ContentOne/>}/>
            <Route path="/" render={()=><About/>}/>
            <Route path="/" render={()=><Clients/>}/>
        {/*  <Route path="/contact" render={()=>}/>
        <Route path="/post/:id" render={()=>}/>*/}
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
