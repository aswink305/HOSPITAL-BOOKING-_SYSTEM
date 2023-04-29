import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { statechange } from '../redux/Updation'
import axios from 'axios'
export default function AdminViewdrs() {
    const [Cardiology, setCardiology] = useState([])
const [Dental, setDental] = useState([])
const [Diagnostic, setDiagnostic] = useState([])
const [Neurology, setNeurology] = useState([])



  useEffect(() => {
    axios.post("http://localhost:5000/addingdr/availableDr").then((responce)=>{
      // console.log("responce===>",responce);
setCardiology(responce.data.Cardiology)
setDental(responce.data.Dental)
setDiagnostic(responce.data.Neurology)
setNeurology(responce.data.Diagnostic)

      
    })
  }, [])
console.log("Cardiology===>",Cardiology);
const cato = useSelector((state)=>state.catogories)
// console.log("cato===>",cato);
  const dispatch = useDispatch()

  return (
    <div className='Available_dr_flex_support2'>
        <div style={{ width: "700px", display: "flex" }} id='Available_dr_imge_4'>
          <div style={{ width: "50%", height: "100px", color: "black" }}>
          </div>
          <div style={{ width: "50%" }}>
            <div id='spcr2'></div>

            <p id='Available_dr_font2'>
              <br /> Department </p>
            <a onClick={()=>dispatch(statechange("Cardiology")) } >
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

<p id='Available_dr_ptag3' >Cardiology Doctors </p>

</div>
{Cardiology.map(cardio=>

  <div className='col-sm-3' id='Available_dr_overflw_width'>
    <img id='Available_dr_overflw_img' src="./images/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
    <p style={{ textAlign: "center" }}>{cardio.name}</p>
    <p style={{ textAlign: "start" }}>Specialised {cardio.categorie}</p>
    <p style={{ textAlign: "start" }}>Qualification {cardio.qualification}</p>
    <div style={{ display: "flex", justifyContent: "center" }}>
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

  <p id='Available_dr_ptag3' >Neurology Doctors </p>

</div>
{Neurology.map(neuro=>

          <div className='col-sm-3' id='Available_dr_overflw_width'>
            <img id='Available_dr_overflw_img' src="./images/1 (3).jpg" alt="" />
            <p style={{ textAlign: "center" }}>{neuro.name}</p>
            <p style={{ textAlign: "start" }}>Specialised {neuro.categorie}</p>
            <p style={{ textAlign: "start" }}>Qualification {neuro.qualification} </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
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

  <p id='Available_dr_ptag3' >Dental Doctors </p>

</div>
{Dental.map(dent=>

          <div className='col-sm-3' id='Available_dr_overflw_width'>
            <img id='Available_dr_overflw_img' src="./images/1 (1).jpg" alt="" />
            <p style={{ textAlign: "center" }}> {dent.name} </p>
            <p style={{ textAlign: "start" }}>Specialised {dent.categorie} </p>
            <p style={{ textAlign: "start" }}>Qualification {dent.qualification} </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
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

  <p id='Available_dr_ptag3' >Diagnostic Doctors </p>

</div>
{Diagnostic.map(dia=>

          <div className='col-sm-3' id='Available_dr_overflw_width'>
            <img id='Available_dr_overflw_img' src="./images/1 (2).jpg" alt="" />
            <p style={{ textAlign: "center" }}> {dia.name}</p>
            <p style={{ textAlign: "start" }}>Specialised {dia.categorie} </p>
            <p style={{ textAlign: "start" }}>Qualification {dia.qualification} </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
            </div>
          </div>     
  )}
          &nbsp;
        </div> : ""
        
        
        }
</>


  
  
      </div>  )
}
