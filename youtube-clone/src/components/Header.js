import React, { useState } from "react";
import yt from "../Assets/yt.png";
import { MDBCol, MDBIcon } from "mdbreact";
import "./css/Header.css";
import axios from "axios";

const Header = ({handleChange, handleSubmit, query}) => {
    return (
      <div className="header-content">
                  <div id="ytcorner">
              <div id="menu">
                <button class="menu-button">☰</button>
                <a class="menu-link" href="/" style={{color:"white", display: "inline"}}><img src={yt} alt="Youtube" /></a>
                <a class="menu-link2" href="/" style={{color:"white", display: "inline"}}>YouTube</a>
              </div>
            </div>
            <MDBCol md="5">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          id="searchBar"
          className="form-control my-0 py-1"
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for videos..."
          aria-label="Search"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-white d-flex align-items-center" type="submit" style={{margin:"0", height:"38px"}}>
            <MDBIcon icon="search"/>
          </button>
        </div>
      </form>
      </MDBCol>
        
      </div>
      
    );
  }
  export default Header;

