import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "../App.css"
const Post = () => {
  const [data,setdata]=useState([])
  useEffect(()=>{

    axios({url:"https://ashin-instaclone-server.herokuapp.com/posts",method:"GET"}).then((userdata)=>{
 setdata(userdata.data.reverse())
  })
  },[])
  
  return (
    <div>
       <header className='headers'>
<img style={{height:"50px",width:"200px"}} src='instaclone.jpg'/>
<Link to='/Form'><img style={{height:"35px", width:"35px",margin:"8px 15px 15px 15px"}} src='camicon.jpg'></img></Link>
       </header>
      {data.length>0 &&
      data.map((user,i)=>
      <div className='post' key={i}>
      <div className='Gc'>
          <span >
          <div className='name'>{user.Name}</div>
          <div className='location'>{user.Location}</div>
          </span>
          <span>
          <img className="image" alt='dots' src='./threedots.jpg'/>
          </span>
      </div>
      <div className='Gc'><img className="image1" alt src={user.Image}/></div>
      <div className='Gc'>
          <span><div><img className="image" alt='heart' src='./likelogo.png'/>  <img className="image" alt="share" src='./sendlogo.jpg'/></div>
          <div className='likes'>likes</div></span>
          <span className='date'>date</span>
      </div>
      <div className='Gc'><div className='desc'>{user.Description}</div></div>
     </div>
      
      )}
      
    </div>
  )
}

export default Post