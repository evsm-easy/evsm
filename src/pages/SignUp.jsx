import React, { useState } from 'react'
import { supabase } from '../client'
import { Link } from 'react-router-dom'
import { Footer, Header1 } from '../components'

const SignUp = () => {

    const [formData, setFormData] = useState({
        username: "", email: "", password: ""
    })

    // console.log(formData)

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

            const { error2 } = await supabase
                .from('account')
                .insert([formData])

            const { data, error } = await supabase.auth.signUp(
                {
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            username: formData.username,
                        }
                    }
                }
            )
            alert("Please check your mail to verify your account")

        } catch (error) {
            console.log(error)
            alert(error)
        }

    }

    return (
        <div>
            <Header1 />

            {/* SignUp section */}
            <section className="animate__animated animate__fadeIn mb-5">
                <div className="p-5 bg-image"></div>

                <div className="shadow-lg card mx-4 mx-md-5 shadow-5-strong">
                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Register now</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="username" name='username' className="form-control" onChange={handleChange} />
                                                <label className="form-label" htmlFor="username">Username</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" name='email' className="form-control" onChange={handleChange} />
                                        <label className="form-label" htmlFor="email">Email address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" name='password' className="form-control" onChange={handleChange} />
                                        <label className="form-label" htmlFor="password">Password</label>
                                    </div>

                                    <button type="submit" className="btn btn-success btn-block mb-4">
                                        Sign up
                                    </button>
                                    <div className="d-flex justify-content-center">
                                        <p>Already have account?&nbsp;</p> <Link to={"/login"} className='text-success'>Login</Link> &nbsp;&nbsp;&nbsp;
                                        <p>Want to become&nbsp;</p> <Link to={"/seller_signup"} className='text-success'>Seller</Link>?</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default SignUp