import React from 'react'
import axios from 'axios'
function Comp2() {
  const getmoviedata=async()=>{
  
    try{
      const jsonobject = await axios.get('http://localhost:3000/addmoviedata')
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
      <div className="get">
        <h1>Get Movie Data</h1>
        <form>
            <input type="button" onClick={getmoviedata}  value="Get Movie Data"/><br/>
        </form>
        </div>
        </center>
    </>
  )
}

export default Comp2