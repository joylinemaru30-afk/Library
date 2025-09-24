import React, { useState } from 'react'
import FooterSocial from "./Footer";
// import stylings from Secondcomponent.css
// import Secondcomponent from './Secondcomponent';


  const Signincomponent= () => {
    const[username,setusername]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")

  const [loading, setloading] = useState(false);



    const submit=async(e)=>{
      const Loader = () => (
        <div className="hourglassBackground">
          <div className="hourglassContainer">
            <div className="hourglassCurves"></div>
            <div className="hourglassCapTop"></div>
            <div className="hourglassGlassTop"></div>
            <div className="hourglassSand"></div>
            <div className="hourglassSandStream"></div>
            <div className="hourglassCapBottom"></div>
            <div className="hourglassGlass"></div>
          </div>
        </div>
      );

      e.preventDefault();

    }
  
  return (
   <div className="row justify-content-center mt-4">
    
      <div className="col-md-6 p-4 card shadow">
    <h3>City Library</h3>
    {loading && <Loader/>}
    

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
   <FooterSocial/>
  </div>
 
   
        
  )
}

export default Signincomponent