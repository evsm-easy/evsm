import React, { useState } from 'react'
import { Footer, Header1 } from '../components'
import { Link } from 'react-router-dom'
import { supabase } from '../client'


const Seller_signup = () => {

    const [formData, setData] = useState({
        username: "", email: "", password: "", station_name: "", address: "", contact: "", ports: "", cost: ""
    })

    function handleChange(event) {
        setData((prevdata) => {
            return {
                ...prevdata,
                [event.target.name]: event.target.value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {

            const { error2 } = await supabase
                .from('stations')
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


    console.log(formData)

    return (
        <div>

            {/* Navbar */}
            <Header1 />

            {/* SignUp Section */}
            <section className="animate__animated animate__fadeIn mb-5">
                <div className="p-5 bg-image"></div>

                <div className="shadow-lg card mx-4 mx-md-5 shadow-5-strong">
                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Register as Seller</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <h5 className='fw-bold'>1. Personal Details</h5><hr /><br />
                                            <div className="form-outline">
                                                <input type="text" id="username" name='username' className="form-control" onChange={handleChange} />
                                                <label className="form-label" htmlFor="username">Name of owner</label>
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

                                    <br /><br />

                                    <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <h5 className='fw-bold'>2. Station Details</h5><hr /><br />
                                            <div className="form-outline">
                                                <input type="text" id="station_name" name='station_name' className="form-control" onChange={handleChange} />
                                                <label className="form-label" htmlFor="station_name">Name of station</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="address" name='address' className="form-control" onChange={handleChange} />
                                        <label className="form-label" htmlFor="address">Station's full address</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="contact" name='contact' className="form-control" onChange={handleChange} />
                                        <label className="form-label" htmlFor="contact">Contact no.</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="number" id="ports" name='ports' className="form-control" onChange={handleChange} />
                                        <label className="form-label" htmlFor="ports">Number of charging ports available</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="number" id="cost" name='cost' className="form-control" onChange={handleChange} />
                                        <label className="form-label" htmlFor="cost">Cost per KWh</label>
                                    </div>

                                    <br /><br />

                                    {/* <div className="row">
                                        <div className="col-md-12 mb-4">
                                            <h5 className='fw-bold'>3. Documents</h5>
                                            <hr />
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="file" id="photo" name='photo' className="form-control" onChange={handleImageChange} />
                                        <label className="form-label" htmlFor="photo">Passport size picture of owner</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="file" id="sign" name='sign' className="form-control" onChange={handleImageChange} />
                                        <label className="form-label" htmlFor="sign">Picture of signature</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <select class="form-control" name="proof_of_identity" required>
                                            <option defaultValue="Select Proof of Identity" selected disabled>Select Proof of Identity</option>
                                            <option defaultValue="passport">Passport</option>
                                            <option defaultValue="aadhar_card">Aadhar Card</option>
                                            <option defaultValue="drivers_license">Driver's License</option>
                                        </select>
                                        <input type="file" id="proof_of_identity_file" name='proof_of_identity_file' className="form-control" onChange={handleImageChange} />
                                    </div> */}

                                    <button type="submit" className="btn btn-success btn-block mb-4">
                                        Sign up
                                    </button>
                                    <div className="d-flex justify-content-center">
                                        <p>Already have seller account?&nbsp;</p> <Link to={"/seller_login"} className='text-success'>Login</Link> &nbsp;&nbsp;&nbsp;</div>
                                </form>
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

export default Seller_signup