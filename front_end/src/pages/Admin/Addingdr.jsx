import React from 'react'
import "./Addingdr.css"
import axios from 'axios'
import { useState } from 'react';
export default function Addingdr() {
const [doctordet, setdoctordet] = useState({})
const [file, setfile] = useState()
   const onchangedata = (e)=>{
    const value = e.target.value
    const name = e.target.name

    setdoctordet({...doctordet,[name]:value})

   }

   const godata = ()=>{
    axios.post("http://localhost:5000/addingdr",doctordet).then((responce)=>{
    console.log("response");
})

    if(file){
      const data = new FormData();
      const filename = file.name 
      data.append = ("name",filename)
      data.append = ("file",file)
      console.log(" dataaaaaaaaaaaaaaaaas===>",data);
      axios.post("http://localhost:5000/addingdr/imagegetting",data).then((responce)=>{
        console.log("responce");
      })

    }

   }
  return (
    <section id='adding_back2'>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100  ">
        <div className="col-lg-12 col-xl-11 " id='reg_flex_align'>
          <div className="card text-black" style={{ borderRadius: "20px", border: "1px solid white" }}>
            <div className="card-body " >
              <div className="row justify-content-center">
                <div>
                  <p style={{ color: "white" }} className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">
                Adding Doctors
                  </p>
                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          name='name'
                          onChange={onchangedata}
                          type="text"
                          id="form3Example1c"
                          className="form-control"
                        />
                        <label style={{ color: "white" }} className="form-label" htmlFor="form3Example1c">
                          Name
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          name='qualification'
                          onChange={onchangedata}
                          type="text"
                          id="form3Example1c"
                          className="form-control"
                        />
                        <label style={{ color: "white" }} className="form-label" htmlFor="form3Example1c">
                          Qualification
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">

      <p style={{color:"white"}}>
       Categories: &nbsp;&nbsp;
        <label>
          <input type="radio" onChange={onchangedata} name="categorie" value="Cardiology" />
          &nbsp;&nbsp; Cardiology &nbsp;&nbsp;
        </label>
        <label>
          <input type="radio" onChange={onchangedata} name="categorie" value="Neurology" />
          &nbsp;&nbsp; Neurology &nbsp;&nbsp;
        </label>
        <label>
          <input type="radio" onChange={onchangedata} name="categorie" value="Dental" />
          &nbsp;&nbsp; Dental &nbsp;&nbsp;
        </label>
        <label>
          <input type="radio" onChange={onchangedata} name="categorie" value="Diagnostic" />
          &nbsp;&nbsp; Diagnostic &nbsp;&nbsp;
        </label> 
      </p>
                      </div>
                    </div>
                   
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          name='address'
                          onChange={onchangedata}
                          type="text"
                          id="form3Example3c"
                          className="form-control"
                        />
                        <label style={{ color: "white" }} className="form-label" htmlFor="form3Example3c">
                          Address
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        
                        <label style={{ color: "white" }} className="form-label" htmlFor="form3Example1c">
                          Image
                        </label>
                        <input onChange={(e)=>  {setfile(e.target.files[0]) ; setdoctordet({...doctordet,image:e.target.files[0].name})}} type="file" name='image'  id="form3Example1c"
                          className="form-control"  />
                      </div>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                    
                      <label style={{ color: "white" }} className="form-check-label" htmlFor="form2Example3">
                        I agree all statements in{" "}
                        <a href="#!">Terms of service</a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" className="btn btn-primary btn-lg" onClick={godata}>
                        Register
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
