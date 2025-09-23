import React, { useState } from 'react'

const Lending = () => {
    const[name,setname]=useState("")
    const[textbook,settextbook]=useState("")
    const[date,setdate]=useState("")
    const[residence,setresidence]=useState("")

  const [loading, setloading] = useState(false);


    const submit=async(e)=>{
        

    }
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
      )


  return (
    <div className="row justify-content-center mt-4">


        <div className="col-md-6 p-4 card shadow">
            <form onSubmit={submit}>
                <input type="text" 
                className='form-control'
                placeholder='enter your name here'
                value={name}
      onChange={(e)=>setname(e.target.value)}

                /> <br />
                {name}
                <input type="text" 
                 className='form-control'
                 placeholder='enter your textbook name here'
                 value={textbook}
       onChange={(e)=>settextbook(e.target.value)}
 /> <br />
 {textbook}
 <input type="number"
 className='form-control'
 placeholder='enter the date borrowed here'
 value={date}
onChange={(e)=>setdate(e.target.value)}
  
  /> <br />
  {date}
   <input type="text"
   className='form-control'
   placeholder='enter your residence here'
   value={residence}
  onChange={(e)=>setresidence(e.target.value)}
    
   
   /> <br />
   {residence}
   <button type="submit" className="btn btn-warning">submit</button>

            </form>

    </div>
    </div>
  )
}

export default Lending