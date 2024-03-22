import logo from './logo.svg';
import './App.css';
import Header from'./components/Header.js';
import SideMenu from "./components/SideMenu.js";
import Feed from './components/Feed.js';
import axios from 'axios';
import useState from "react";
import Display from "./components/Display.js";


function  App() {
  
  return (
    <div className="App">
     <Display/>
    </div>
  );
}

export default App;
