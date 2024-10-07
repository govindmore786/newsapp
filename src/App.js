
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      
      <div>
        <Router>
        <Navbar/>
        
        
        <Routes>
            <Route  path='/' element={<News key='general' category="general"/>} /> 
          
       
            <Route  path='/business' element={<News key='business' category="business"/>} /> 
          
      
            <Route path='/entertainment' element={<News key='entertainment' category="entertainment"/>} /> 
          
      
            <Route path='/general' element={<News key='general' category="general"/>} /> 
          
        
            <Route path='/health' element={<News key='health' category="health"/>} /> 
        
       
            <Route path='/science' element={<News key='science' category="science"/>} /> 
          </Routes>
        </Router>
      </div>
    )
  }
}

