import React from 'react';
 import {Link} from 'react-router-dom'
 import "../App.css"
export default function Landing_page() {
  return <div className='landingpage'>
    <div>
      <img src="landingimg.webp" className='landingimage'/>
      </div>
    <div className='landingbutton'>
      <h1>10x Team 04</h1>
    <Link to={"/Post"}><button>Enter</button></Link>
    </div>
  </div>;
}
