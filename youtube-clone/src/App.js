import logo from './logo.svg';
import './App.css';
import Header from'./components/Header.js';
import SideMenu from "./components/SideMenu.js";
import Feed from './components/Feed.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flex"> 
        <SideMenu />
        <div className='container'>
        <Feed />
        </div>
      </div> 
    </div>
  );
}

export default App;
