import React, { useState } from 'react'

  const Signincomponent= () => {
    const[username,setusername]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")



    const submit=async(e)=>{

      e.preventDefault();

    }
  
  return (
   <div className="row justify-content-center mt-4">
      <div className="col-md-6 p-4 card shadow">
    <h3>City Library</h3>

    <form onSubmit={submit}>
      <input type="text"
      className="form-control"
      placeholder="enter your username here"
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      />
      {username} <br />
      <input type="text" 
      className='form-control'
      placeholder='enter your email here'
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      />
      {email} <br />

      <input type="password"
      className='form-control'
      placeholder='enter your password here'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      />
      {password} <br />
      <button type="submit" className="btn btn-warning">Submit</button>


    </form>
   </div>
   </div>
   
        
  )
}

export default Signincomponent