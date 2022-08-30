import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "../App.css"
const Post = () => {
  const [data,setdata]=useState([])
  const [page,setPage]=useState(0)
  useEffect(()=>{

    axios({url:"http://localhost:3001/posts",method:"GET"}).then((userdata)=>{
 setdata(userdata.data.reverse())
//   console.log(userdata.data)
//  console.log(new Date())
  })
  },[])
  const handlePagination=(num)=>{
setPage(num)

  }

  return (
    <div>
       <header className='headers'>
<img style={{height:"50px",width:"200px"}} src='instaclone.jpg'/>
<Link to='/Form'><img style={{height:"35px", width:"35px",margin:"8px 15px 15px 15px"}} src='camicon.jpg'></img></Link>
       </header>
      {data.length>0 &&
      data.slice(page,page+1).map((user,i)=>
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
      <div className='Gc'><img className="image1" alt={user.Name} src={user.Image}/></div>
      <div className='Gc'>
          <span><div><img className="image" alt='heart' src='./likelogo.png'/>  <img className="image" alt="share" src='./sendlogo.jpg'/></div>
          <div className='likes'>125</div></span>
          <span className='date'>{user.Date.split(" ").splice(1,3).join("/")}</span>
      </div>
      <div className='Gc'><div className='desc'>{user.Description}</div></div>
      {
        page===data.length-1 &&
        <button style={{opacity:.3}} onClick={()=>data.length-1>page?handlePagination(page+1):null} id="Nextbutt">
        Next
      </button>
      }
      {
        page !==data.length-1 &&
        <button  onClick={()=>data.length-1>page?handlePagination(page+1):null} id="Nextbutt">
        Next
      </button>
      }
      {
        page===0 &&
      <button style={{opacity:.3}} onClick={()=>page>0?handlePagination(page-1):null} id="Prevbutt">
      Prev
    </button  >
      }
      <button id='pageNum'>
        {page+1}
      </button>
      {
        page!==0 &&
        <button onClick={()=>page>0?handlePagination(page-1):null} id="Prevbutt">
        prev
      </button>
      }
      
     </div>
      
      )}
      
    </div>
  )
}

export default Post