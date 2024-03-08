import React, { Component } from 'react'
import "./css/Feed.css";
import { Link } from "react-router-dom";
import pic1 from "../Assets/b1.png";
import pic2 from "../Assets/b2.png";
import pic3 from "../Assets/banner.jpg";
import pic4 from "../Assets/jean.png";
import pic5 from "../Assets/port.png";
import pic6 from "../Assets/bg.jpg";
import pic7 from "../Assets/y1.png";
import pic8 from "../Assets/Screenshot_20230208_121550.png";
export default class Feed extends Component {
  render() {
    return (
        <div className="feed">
      <Link to={`video`} style={{ textDecoration: 'none', color:"black"}} className='Card'>
        <img src={pic1} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </Link>
      <div className='Card'>
        <img src={pic2} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic3} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic4} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic5} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic6} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic7} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic8} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic8} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic8} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic8} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic8} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic8} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic8} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      <div className='Card'>
        <img src={pic8} alt=""/>
        <h2>Picture video on background color changer</h2>
        <h3>Curtick Walton</h3>
        <p>2 views &bull; 2 days ago</p>
      </div>
      </div>
    )
  }
}