import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [logindatas, setlogindatas] = useState({})
  const navigate = useNavigate()

  const changedatas = (event) => {
    const values = event.target.value
    const name = event.target.name
    setlogindatas({ ...logindatas, [name]: values })
    console.log("logindatassssssssss====>", logindatas)
  }
  const godata = () => {
    axios.post("http://localhost:5000/login", logindatas).then((responce) => {
      console.log("responce====>", responce.data.loginDT);
      if (responce.data.success == true) {
        localStorage.setItem("Loginupdate",responce.data.loginDT)
        toast.success("login success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
        if (responce.data.msg == "i am admin") {
          navigate('/admin')
        } else {
          navigate('/available_dr')

        }

      }

    }).catch((err) => {
      console.log(err);
      if (err.response.data.error == true) {
        toast.error(err.response.data.msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      }
    })
  }
  const newdate = new Date().toLocaleString()
  console.log("dateeee====>", newdate)
  return (
    <>
      <ToastContainer />

      <section id='registration_back'>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100  ">
            <div className="col-lg-12 col-xl-11 " id='reg_flex_align'>
              <div className="card text-black" style={{ borderRadius: "20px", border: "1px solid white" }}>
                <div className="card-body " >
                  <div className="row justify-content-center">
                    <div>
                      <p style={{ color: "white" }} className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 ">
                        Login
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={changedatas}
                              name='name'
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
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              onChange={changedatas}
                              name='password'

                              type="password"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label style={{ color: "white" }} className="form-label" htmlFor="form3Example3c">
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">

                          <a href="/registration">Register</a>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg" onClick={godata} >

                            Login
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
    </>
  )
}
