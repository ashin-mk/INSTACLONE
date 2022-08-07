import React from 'react';
import './App.css';
import Post from './components/Post';
import Landing_page from './Landingpage/landingpage';
import Form from './components/Form';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
 
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Landing_page/>}></Route>
      <Route path={"/Post"} element={<Post/>}></Route>
      <Route path={"/Form"} element={<Form/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
