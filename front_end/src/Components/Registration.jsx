import React, { useState } from 'react'
import "./Registration.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function Registration() {
  const [regitser, setregitser] = useState({})

  const registeronchange = (event) => {
    var values = event.target.value
    var names = event.target.name

    setregitser({ ...regitser, [names]: values })

  }
  console.log("onchange console========>", regitser)
  const godata = () => {
    axios.post("http://localhost:5000/register", regitser).then((responce) => {
      if (responce.data.success == true) {
        console.log("hooo")
        toast.success('success to save data!', {
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
    }).catch((err) => {
      console.log("errrrrrr===>", err.response.data)
      if (err.response.data.success == false) {
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
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name='name'
                              onChange={registeronchange}
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
                              name='email'
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={registeronchange}
                            />
                            <label style={{ color: "white" }} className="form-label" htmlFor="form3Example3c">
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name='dob'
                              onChange={registeronchange}
                              type="date"
                              id="form3Example3c"
                              className="form-control"
                            />
                            <label style={{ color: "white" }} className="form-label" htmlFor="form3Example3c">
                              Dob
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name='address'
                              onChange={registeronchange}
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
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name='password'

                              onChange={registeronchange}
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                            />
                            <label style={{ color: "white" }} className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              name='repassword'
                              onChange={registeronchange}
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                            />
                            <label style={{ color: "white" }} className="form-label" htmlFor="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue
                            id="form2Example3c"
                          />
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



    </>
  )
}
