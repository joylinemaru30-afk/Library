import React from 'react'
import Footer from "./Footer";


const Location = () => {
  return (
    <div>
    <h4>Our location</h4>
    <p> From the Easycoach offices walk staright along the highway,past canaan market then turn right at the round about.The place is on your right,next to Tiryo phone shop</p>
    <h6>Your are all welcomed to our city library</h6>
    <h6>our services are provided 24/7</h6>

    incase of any problem you can reach out our office through our email
    <h5>citylibrary@gmail.com</h5> or contact our office number below 
    <h2>0119852145</h2>

    <p>You can also access our books online  and also while offline through our google account</p>
    
    <h2>@citylibraryofflineservice</h2>
    <div className="col-md-4 p-3">
        <div className="card shadow h-100">
        <img src="images/library.jpeg" 
        alt=""width={300}/>
        <div className="card-body">
          </div>

        </div>

        </div>
    
    <Footer/>
    
</div>

  )
}

export default Location