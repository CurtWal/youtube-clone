import { useState } from 'react';
import "../index.css";
import yt from "../Assets/yt.png";
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { GiConsoleController } from "react-icons/gi";
import { IoMdMusicalNote } from "react-icons/io";
import { FaNewspaper, FaTrophy, FaFireAlt, FaLightbulb, FaHome, FaDollarSign  } from "react-icons/fa";
import {HiViewBoards } from 'react-icons/hi';

function SideMenu({ name, ...props }) {
  const customTheme = {
    "root": {
      "base": "h-full",
      "collapsed": {
        "on": "w-16",
        "off": "w-64"
      },
      "inner": "h-full overflow-y-auto overflow-x-hidden rounded bg-[#212121] py-4 px-3 bg-[#212121] "
    },
    "collapse": {
      "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
      "icon": {
        "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        "open": {
          "off": "",
          "on": "text-gray-900"
        }
      },
      "label": {
        "base": "ml-3 flex-1 whitespace-nowrap text-left",
        "icon": {
          "base": "h-6 w-6 transition ease-in-out delay-0",
          "open": {
            "on": "rotate-180",
            "off": ""
          }
        }
      },
      "list": "space-y-2 py-2"
    },
    "cta": {
      "base": "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
      "color": {
        "blue": "bg-cyan-50 dark:bg-cyan-900",
        "dark": "bg-dark-50 dark:bg-dark-900",
        "failure": "bg-red-50 dark:bg-red-900",
        "gray": "bg-alternative-50 dark:bg-alternative-900",
        "green": "bg-green-50 dark:bg-green-900",
        "light": "bg-light-50 dark:bg-light-900",
        "red": "bg-red-50 dark:bg-red-900",
        "purple": "bg-purple-50 dark:bg-purple-900",
        "success": "bg-green-50 dark:bg-green-900",
        "yellow": "bg-yellow-50 dark:bg-yellow-900",
        "warning": "bg-yellow-50 dark:bg-yellow-900"
      }
    },
    "item": {
      "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-white hover:bg-red-500 dark:text-white dark:hover:bg-gray-700 no-underline",
      "active": "bg-gray-100 dark:bg-gray-700",
      "collapsed": {
        "insideCollapse": "group w-full pl-8 transition duration-75",
        "noIcon": "font-bold"
      },
      "content": {
        "base": "px-3 flex-1 whitespace-nowrap"
      },
      "icon": {
        "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
        "active": "text-gray-700 dark:text-gray-100"
      },
      "label": "",
      "listItem": ""
    },
    "items": {
      "base": ""
    },
    "itemGroup": {
      "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
    },
    "logo": {
      "base": "mb-5 flex items-center pl-2.5",
      "collapsed": {
        "on": "hidden",
        "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      },
      "img": "mr-3 h-6 sm:h-7"
    }
  };
  return (
    <Sidebar theme={customTheme} style={{backgroundColor: "#212121", position: "sticky", top: "81px"}}>
      <Sidebar.Items>
        <Sidebar.ItemGroup >
          <Sidebar.Item href="#" icon={FaHome}>
            Home
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaNewspaper}>
            News
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={GiConsoleController}>
            Gaming
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={IoMdMusicalNote}>
            Muisc
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaTrophy}>
            Sports
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaFireAlt}>
            Trending
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaLightbulb}>
            Learning
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={FaDollarSign }>
            Buy Premium
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

    
//     <div>
//     <div id="navbar">
//     <a href="#" class="menu-bars" id="show-menu">
//       <i class="fas fa-bars"></i>
//     </a>
//   </div>
//  <nav id="nav-menu">
//    <ul class="nav-menu-items">
//      <div id="navbar-toggle">
//        <a href="#" class="menu-bars" id="hide-menu">
//          <i class="fas fa-bars nav-icon"></i>
//        </a>
//        <a href="#" style={{color:"white"}}><img src={yt} alt="Youtube" />Youtube</a>
//      </div>  
//      <hr />
//      <div class="nav-section">
//        <li class="nav-text"><a href="#"><i class="fas fa-home nav-icon"></i>Home</a></li>
//        <li class="nav-text"><a href="#"><i class="fas fa-fire nav-icon"></i>Trending</a></li>
//        <li class="nav-text"><a href="#"><i class="fab fa-youtube nav-icon"></i>Subscriptions</a></li>
//      </div>
//      <hr />
//        <div class="nav-section">
//        <li class="nav-text"><a href="#"><i class="fas fa-play-circle nav-icon"></i>Library</a></li>
//        <li class="nav-text"><a href="#"><i class="fas fa-history nav-icon"></i>History</a></li>
//        <li class="nav-text"><a href="#"><i class="fas fa-clock nav-icon"></i>Watch later</a></li>
//      </div>
//    </ul>
//  </nav>
//  </div>
  );
}

export default SideMenu;