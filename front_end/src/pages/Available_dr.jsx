import React, { useEffect, useState } from 'react'
import "./Available_dr.css"
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { statechange } from '../redux/Updation'
import Token_booking from './Token_booking'
import { Navigate, useNavigate } from 'react-router-dom'
export default function Available_dr() {
const [Cardiology, setCardiology] = useState([])
const [Dental, setDental] = useState([])
const [Diagnostic, setDiagnostic] = useState([])
const [Neurology, setNeurology] = useState([])
const navigate = useNavigate()

  useEffect(() => {
    axios.post("http://localhost:5000/addingdr/availableDr").then((responce)=>{
      console.log("responce===>",responce);
setCardiology(responce.data.Cardiology)
setDental(responce.data.Dental)
setDiagnostic(responce.data.Diagnostic)
setNeurology(responce.data.Neurology)

      
    })
  }, [])
console.log("Cardiology===>",Cardiology);
const cato = useSelector((state)=>state.catogories)
console.log("cato==>",cato);

// console.log("cato===>",cato);
  const dispatch = useDispatch()  
  
 const viewingdatas =  useSelector((state)=>state.catogories.token_page_data)

console.log("viewingdatas",viewingdatas);
const navigation = (dr_id)=>{
console.log("dr_id===>",dr_id);

// navigate(`/tokenbooking/${dr_id}`)
}
  return (
    <>
      <Navbar/>
      <div id='Available_dr_img'>

        <div id='spcr1' > </div>
        <div className='container'>

          <p id='Available_dr_ptag'>QUALIFIED DOCTORS
            <br />
            <span id='Available_dr_ptag2'> You Can Trust Us</span>
          </p>

        </div>


      </div>

      <div id='spcr2'>


      </div>



      <div className='Available_dr_flex_support'>
        <div style={{ width: "10%" }}>

        </div>

        <div className='container' id='Available_dr_flex_Width'>
          <h1 >
            Who
            <br />
            <span>
              We Are
            </span>
          </h1>
          <p id='Available_dr_font_size'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <button id='Available_dr_button_size'>Contact Us</button>
        </div>
        <div id='Available_dr_flex_Width' style={{ width: "50%" }}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <img id='Available_dr_img_size' src="./images/first_aid_kit_PNG72.jpg" alt="" />
              <h2>
                <br />

                Medical Treatment
              </h2>

              <p style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div style={{ width: "50%" }}>
              <img id='Available_dr_img_size' src="./images/logo-doctors-logo-black-and-white-vector-115639996125zrqlpbvsc.jpg" alt="" />
              <h2>
                <br />

                Qualified Doctors
              </h2>

              <p style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>

          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
              <img id='Available_dr_img_size' src="./images/06801a48988337547b6072291f2320dc-analog-clock-icon-blue-by-vexels.jpg" alt="" />
              <h2>
                <br />

                24 Hours Service
              </h2>

              <p style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <div style={{ width: "50%" }}>
              <img id='Available_dr_img_size' src="./images/1631090.jpg" alt="" />
              <h2>
                <br />

                Emergency Services
              </h2>

              <p style={{ fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>

          </div>



        </div>



      </div>

      {/* <div id='spcr2'>

<p id='Available_dr_ptag3' >Available Doctors</p>

</div>

<div className='row' id='row'>
<div  id='Available_dr_overflw' >     
&nbsp;

<div className='col-sm-2' id='Available_dr_overflw_width'>

    <img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
    <p style={{textAlign:"center"}}>Dr name</p>
    <p style={{textAlign:"start"}}>Specialised .....</p>
    <p style={{textAlign:"start"}}>Qualification .....</p>
    <div style={{display:"flex",justifyContent:"center"}}>
    <button id='Available_dr_overflw_button'>Token booking</button>

    </div>
</div>
&nbsp;

<div className='col-sm-2' id='Available_dr_overflw_width'>

    <img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
   

</div>&nbsp;<div className='col-sm-2' id='Available_dr_overflw_width'>

<img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />

</div>&nbsp;<div className='col-sm-2' id='Available_dr_overflw_width'>

<img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
</div>&nbsp;<div className='col-sm-2' id='Available_dr_overflw_width'>

<img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
</div>&nbsp;<div className='col-sm-2' id='Available_dr_overflw_width'>

<img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
</div>&nbsp;<div className='col-sm-2' id='Available_dr_overflw_width'>

<img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
</div> &nbsp;<div className='col-sm-2' id='Available_dr_overflw_width'>

<img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
</div>   

&nbsp;
   </div>
</div> */}
      
      <div id='spcr2'></div>

      <div className='Available_dr_flex_support2'>
        <div style={{ width: "700px", display: "flex" }} id='Available_dr_imge_4'>
          <div style={{ width: "50%", height: "100px", color: "black" }}>
          </div>
          <div style={{ width: "50%" }}>
            <div id='spcr2'></div>

            <p id='Available_dr_font2'>Our
              <br /> Department And Book Your Token</p>
            <a onClick={()=>dispatch(statechange("Cardiology"))  } >
              <div id='Available_dr_box'>
                <div id='spcr3'>
                </div>
                <p id='Available_dr_font4'>Cardiology</p>
              </div>
            </a>
            &nbsp;
            <a  onClick={()=>dispatch(statechange("Neurology"))} >
              <div id='Available_dr_box'>
                <div id='spcr3'></div>
                <p id='Available_dr_font4'>Neurology</p>
              </div>
            </a>
            &nbsp;
            <a onClick={()=>dispatch(statechange("Dental"))}>
              <div id='Available_dr_box'>
                <div id='spcr3'></div>
                <p id='Available_dr_font4'>Dental</p>
              </div>
            </a>
            &nbsp;
            <a onClick={()=>dispatch(statechange("Diagnostic"))} >
              <div id='Available_dr_box'>
                <div id='spcr3'></div>
                <p id='Available_dr_font4'>Diagnostic</p>
              </div>
            </a>
            &nbsp;
          </div>
        </div>
        
<>

        <>

  {cato.Cardiology == true ?       

<div className='row container'>

<div >

<p id='Available_dr_ptag3' >Cardiology Doctors <span style={{color:"green"}}>  Book Your tokens</span></p>

</div>
{Cardiology.map(cardio=>
  <div className='col-sm-3' id='Available_dr_overflw_width'>
    <img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
    <p style={{ textAlign: "center" }}>{cardio.name}</p>
    <p style={{ textAlign: "start" }}>Specialised {cardio.categorie}</p>
    <p style={{ textAlign: "start" }}>Qualification {cardio.qualification}</p>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <a  href={`/tokenbooking/${cardio._id}`}>
      <button  id='Available_dr_overflw_button'> Book your Token</button>
      </a>

    </div>
  </div>
  )}
  &nbsp;
</div> : ""


}
</>
  

</>
     
      
      <>

      {cato.Neurology == true ?         
        
        <div className='row container'>

<div id='spcr2'>

  <p id='Available_dr_ptag3' >Neurology Doctors  <span style={{color:"green"}}>  Book Your tokens</span></p>

</div>
{Neurology.map(neuro=>

          <div className='col-sm-3' id='Available_dr_overflw_width'>
            <img id='Available_dr_overflw_img' src="./images/1 (3).jpg" alt="" />
            <p style={{ textAlign: "center" }}>{neuro.name}</p>
            <p style={{ textAlign: "start" }}>Specialised {neuro.categorie}</p>
            <p style={{ textAlign: "start" }}>Qualification {neuro.qualification} </p>
            <div style={{ display: "flex", justifyContent: "center" }}>  <a  href={`/tokenbooking/${neuro._id}`}>
      <button  id='Available_dr_overflw_button'> Book your Token</button>
      </a>
            </div>
          </div>
      )}
          
          &nbsp;
        </div> : ""
        
        
        }
      </>
    
        <>
        
        {cato.Dental == true ?       
        
        <div className='row container'>

<div id='spcr2'>

  <p id='Available_dr_ptag3' >Dental Doctors  <span style={{color:"green"}}>  Book Your tokens</span></p>

</div>
{Dental.map(dent=>

          <div className='col-sm-3' id='Available_dr_overflw_width'>
            <img id='Available_dr_overflw_img' src="./images/1 (1).jpg" alt="" />
            <p style={{ textAlign: "center" }}> {dent.name} </p>
            <p style={{ textAlign: "start" }}>Specialised {dent.categorie} </p>
            <p style={{ textAlign: "start" }}>Qualification {dent.qualification} </p>
            <div style={{ display: "flex", justifyContent: "center" }}>   <a  href={`/tokenbooking/${dent._id}`}>
      <button  id='Available_dr_overflw_button'> Book your Token</button>
      </a>
            </div>
          </div>
        )}
          &nbsp;
        </div> : ""
        
        
        }
        </>
        
  
  <>

{cato.Diagnostic == true ?       
        
        <div className='row container'>

<div id='spcr2'>

  <p id='Available_dr_ptag3' >Diagnostic Doctors  <span style={{color:"green"}}>  Book Your tokens</span></p>

</div>
{Diagnostic.map(dia=>

          <div className='col-sm-3' id='Available_dr_overflw_width'>
            <img id='Available_dr_overflw_img' src="./images/1 (2).jpg" alt="" />
            <p style={{ textAlign: "center" }}> {dia.name}</p>
            <p style={{ textAlign: "start" }}>Specialised {dia.categorie} </p>
            <p style={{ textAlign: "start" }}>Qualification {dia.qualification} </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <a  href={`/tokenbooking/${dia._id}`}>
      <button  id='Available_dr_overflw_button'> Book your Token</button>
      </a>
            </div>
          </div>     
  )}
          &nbsp;
        </div> : ""
        
        
        }
</>


  
  
      </div>
    </>
  )
}
