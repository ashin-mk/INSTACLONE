import React from 'react'
import "../App.css"
import { useState } from 'react'
import Axios from 'axios'
import FileBase64 from "react-file-base64"
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [data,setdata]=useState({})
const navigate=useNavigate()

 const handledata=(id,e)=>{
setdata({...data, [id] : e.target.value })

 }
const handlepost=()=>{
  Axios.post("http://localhost:3001/upload",data).then(()=>{
  })
  .catch((err)=>{
    console.log(err)
  })
  navigate("/post")
}

  return (
    <div>
    <header className='headers'>

<img style={{height:"50px",width:"200px"}} src='instaclone.jpg'/>

<img style={{height:"35px", width:"35px",margin:"8px 15px 15px 15px"}} src='camicon.jpg'/>

    </header>
    <form className='card' >
  <div className="form-inputs">
   <input id="readonly" readOnly placeholder="No files choosen" value={data.image ? "img/0210/00000/sjk/461":""}/>
        <button>Browse</button>
<button id='uploadfile'>
  <FileBase64 
  type="file"
  multiple={false}
  onDone={({base64})=>setdata({...data, image:base64})} /></button>
  </div>
  <div className='form-inputs'>
    <input type="text" placeholder='Author' id='Author' onChange={(e)=>{handledata("author",e)}}/>
    <input type="text" placeholder="Location" onChange={(e)=>{handledata("location",e)}} id='Location'/>
  </div>
  <div className="form-inputs">
    <input id='Description' type="text" placeholder='Description' onChange={(e)=>{handledata("description",e)}}/>
  </div>
<button onClick={handlepost} id="postbutton">Post</button>
</form>
 </div>
  )
}

export default Form