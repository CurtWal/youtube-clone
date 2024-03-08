import React, { Component } from "react";
import yt from "../Assets/yt.png";
import { MDBCol, MDBIcon } from "mdbreact";
import "./css/Header.css";
export default class Header extends Component {
  render() {
    return (
      <div className="header-content">
                  <div id="ytcorner">
              <div id="menu">
                <button class="menu-button">☰</button>
                <a class="menu-link" href="/" style={{color:"white", display: "inline"}}><img src={yt} alt="Youtube" /></a>
                <a class="menu-link2" href="/" style={{color:"white", display: "inline"}}>YouTube</a>
              </div>
            </div>
        <MDBCol md="6">
          <div className="input-group md-form form-sm form-1 pl-0">
  
            <input
            id="searchBar"
              className="form-control my-0 py-1"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-prepend">
              <span
                className="input-group-text black lighten-3"
                id="basic-text1"
              >
                <MDBIcon className="text-white" icon="search" />
              </span>
            </div>
          </div>
        </MDBCol>
      </div>
    );
  }
}
