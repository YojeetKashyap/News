import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

document.body.style.backgroundColor = "black"

export default class App extends Component {


  render() {
    return (
      <>
      <div>
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<News key="world" pageSize={6} country='us' category="world" ></News>}></Route>
            <Route exact path='/business' element={<News key="business" pageSize={6} country='us' category="business" ></News>}></Route>
            <Route exact path='/health' element={<News  key="health" pageSize={6} country='us' category="health" ></News>} ></Route>
            <Route exact path='/science' element={<News  key="science"  pageSize={6} country='us' category="science" ></News>}></Route>
            <Route exact path='/technology' element={<News key="technology" pageSize={6} country='us' category="technology" ></News>}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={6} country='us' category="entertainment" ></News>}></Route>
          </Routes>
        </Router>
      </div>
      </>
    )
  }
}

