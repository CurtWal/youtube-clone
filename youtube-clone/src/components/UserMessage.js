import React, { Component } from "react";
import "./css/UserMessage.css";
import thumbup from "../Assets/thumb-up.png";
import thumbdown from "../Assets/thumb-down.png";
import pic from "../Assets/Bulbasaur.png";

export default class UserMessage extends Component {
  render() {
    return (
      <div id="users">
        <div class="userMessage">
          <img
            src={pic}
            class="profile_pic"
            style={{ marginBottom: "30px" }}
            alt=""
          ></img>
          <div class="message">
            <input
              style={{ width: "950px" }}
              placeholder="Add a comment..."
            ></input>
            <hr style={{ marginBottom: "30px", marginTop: "0px" }} />
          </div>
        </div>
        <div class="userMessage">
          <img src={pic} class="profile_pic" alt=""></img>
          <div class="message">
            <p>@User123 5 minutes ago</p>
            <p style={{ marginTop: "0" }}>Nice Video, Keep up the good work</p>
            <p>
              <img src={thumbup} class="like_dislike" alt="" /> 12{" "}
              <img src={thumbdown} class="like_dislike" alt="" /> 1
            </p>
          </div>
        </div>
        <div class="userMessage">
          <img src={pic} class="profile_pic" alt=""></img>
          <div class="message">
            <p>@User123 5 minutes ago</p>
            <p style={{ marginTop: "0" }}>Nice Video, Keep up the good work</p>
            <p>
              <img src={thumbup} class="like_dislike" alt="" /> 12{" "}
              <img src={thumbdown} class="like_dislike" alt="" /> 1
            </p>
          </div>
        </div>
        <div class="userMessage">
          <img src={pic} class="profile_pic" alt=""></img>
          <div class="message">
            <p>@User123 5 minutes ago</p>
            <p style={{ marginTop: "0" }}>Nice Video, Keep up the good work</p>
            <p>
              <img src={thumbup} class="like_dislike" alt="" /> 12{" "}
              <img src={thumbdown} class="like_dislike" alt="" /> 1
            </p>
          </div>
        </div>
        <div class="userMessage">
          <img src={pic} class="profile_pic" alt=""></img>
          <div class="message">
            <p>@User123 5 minutes ago</p>
            <p style={{ marginTop: "0" }}>Nice Video, Keep up the good work</p>
            <p>
              <img src={thumbup} class="like_dislike" alt="" /> 12{" "}
              <img src={thumbdown} class="like_dislike" alt="" /> 1
            </p>
          </div>
        </div>
      </div>
    );
  }
}
