import React, { Component } from 'react'
import Feed from './Feed.js';
import SideMenu from './SideMenu.js';
import Header from './Header.js';

export default class SearchFeed extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SideMenu/>
        <Feed/>
      </div>
    )
  }
}
