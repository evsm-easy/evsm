import React, { useEffect, useState } from 'react'
import { Footer, Header1 } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../client'


const Seller_login = ({setToken}) => {

  const [formData, setData] = useState({
    email: "", password: ""
  })

  let navigate = useNavigate()

  function handleChange(event) {
    setData((previousData) => {
      return {
        ...previousData,
        [event.target.name]: event.target.value
      }
    })
  }

  async function handleSubmit(e) {

    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      setToken(data)
      console.log(data)
      navigate("/dashboard")

    } catch (error) {
      alert(error)
    }

  }

  return (
    <div>

      {/* Navbar */}
      <Header1 />

      {/* Main Section */}
      <section className="animate__animated animate__fadeIn vh-90">
        <div className="container py-5 h-100">
          <div className="p-5 bg-image"></div>
          <div className="shadow-lg card mx-4 mx-md-5 shadow-5-strong">
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Login as Seller</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input type="email" id="email" name='email' className="form-control" onChange={handleChange} required/>
                      <label className="form-label" htmlFor="email">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="password" name='password' className="form-control" onChange={handleChange} required/>
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <button type="submit" className="btn btn-success btn-block mb-4">
                      Log in
                    </button>
                  </form>
                  <div className="d-flex justify-content-center">
                    <p>Don't have an account as Seller?</p><Link to={"/seller_signup"} className='text-success'>SignUp</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Seller_login