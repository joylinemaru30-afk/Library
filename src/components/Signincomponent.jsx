import React, { useState } from 'react'
import FooterSocial from "./Footer";
import "./Stylings/Loader.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


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

const Signincomponent = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const navigate=useNavigate();

  const submit=async(e)=>{

    //prevent the site from reloading
    e.preventDefault();
    // update the loading hook with a nwe message 
    setloading(true)

    try{
      // create a new form data
      const data=new FormData();


      // append details to the form data
      data.append ("email",email)
      data.append("password",password)

      // await for the response from the API

      const response =await axios.post("https://joykosgei.pythonanywhere.com/api/signin",data);

      // set loading to false so that it stops loading
      setloading(false)

      console.log(response.data)

      if (response.data.message==="login succesful"){
        // setsuccess(response.data.message) 
        localStorage.setItem("user",JSON.stringify(response.data.user))
        navigate("/")


      }
      else{
       
      }

    }
    catch{
      // set loading to the false so that it stops loading
      setloading(false)
      

    }
  }

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-6 p-4 card shadow">
        <h3>City Library</h3>

        {loading && <Loader />}

        <form onSubmit={submit}>
         

          <input
            type="text"
            className="form-control"
            placeholder="enter your email here"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {/* {email} */}
          <br />

          <input
            type="password"
            className="form-control"
            placeholder="enter your password here"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {/* {password}  */}
          <br />

          <button type="submit" className="btn btn-warning" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
      <FooterSocial />
    </div>
  );
};

export default Signincomponent;
