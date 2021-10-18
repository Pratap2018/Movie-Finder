import React from 'react';
import { Title } from './components/Titlebar';
import Serach from './components/Searchbar';
import './App.css';
function App() {
  return (
    <div className="App">
     <Title title="Movie Finder"/>
     <Serach className="input" type="text" placeholder="Movie Name"/>
     <p className="footer">   <img className="avator-foot" src="https://avatars.githubusercontent.com/u/39677673?v=4" alt="" /><br/> All rights reserved <a href="https://github.com/Pratap2018">@Pratap</a>  </p>
    </div>
  );
}

export default App;
