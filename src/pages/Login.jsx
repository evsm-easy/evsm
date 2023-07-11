import React, { useState } from 'react'
import { supabase } from '../client'
import { Link, useNavigate } from 'react-router-dom'
import { Footer, Header1 } from '../components'

const Login = ({ setToken }) => {

    let navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    console.log(formData)

    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
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

            console.log(data)
            setToken(data)
            navigate('/homepage')

        } catch (error) {
            alert(error)
        }

    }

    return (
        <div>
            <Header1 />

            {/* Login Section */}
            <section className="animate__animated animate__fadeIn vh-90">
                <div className="container py-5 h-100">
                    <div className="p-5 bg-image"></div>
                    <div className="shadow-lg card mx-4 mx-md-5 shadow-5-strong">
                        <div className="card-body py-5 px-md-5">

                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="fw-bold mb-5">Login</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <input type="email" id="email" name='email' className="form-control" onChange={handleChange} required />
                                            <label className="form-label" htmlFor="email">Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="password" name='password' className="form-control" onChange={handleChange} required />
                                            <label className="form-label" htmlFor="password">Password</label>
                                        </div>

                                        <button type="submit" className="btn btn-success btn-block mb-4">
                                            Log in
                                        </button>
                                    </form>
                                    <div className="d-flex justify-content-center">
                                        <p>Don't have an account?</p><Link to={"/signup"} className='text-success'>SignUp</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' name='email' onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                <button type='submit'>Login</button>
            </form> */}
            <Footer />
        </div>
    )
}

export default Login