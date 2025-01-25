import React, { useState } from 'react'
import axios from 'axios'
import  './Comp1.css'

function Comp1() {
  const[moviename,setmoviename]=useState(0);
  const[heroname,setheroname]=useState(0);
  const[heroinename,setheroinename]=useState(0);
  const[Ryear,setRyear]=useState(0);
  const[Rating,setRating]=useState(0);
  const[Genre,setGenre]=useState(0);

  const apipostdata=async()=>{
  
    try{
      const jsonobject = await axios.post('http://localhost:3000/addmoviedata',{moviename,heroname,heroinename,Ryear,Rating,Genre})
      alert('Data Saved Successfully')
      console.log(jsonobject.data)
    }
    catch(error)
    {
      console.log("Post Data Fail")
    }
  }
  

  return (
      <>
      <center>
      <div className="post">
        <h1>Post Movie Data</h1>
        <form>
            <input type="text" onChange={(e)=> setmoviename(e.target.value) } placeholder="Enter Movie Name"/><br/>
            <input type="text" onChange={(e)=> setheroname(e.target.value) } placeholder="Enter Hero Name"/><br/>
            <input type="text" onChange={(e)=> setheroinename(e.target.value) } placeholder="Enter Heroine Name"/><br/>
            <input type="text" onChange={(e)=> setRyear(e.target.value) }  placeholder="Enter Release Year"/><br/>
            <input type="text" onChange={(e)=> setRating(e.target.value) }  placeholder="Enter Rating"/><br/>
            <input type="text" onChange={(e)=> setGenre(e.target.value) } placeholder="Enter Genre"/><br/>
            <input type="button" onClick={apipostdata}  value="Add Movie Data"/><br/>
        </form>
        </div>
        </center>
    </>
  )
}

export default Comp1