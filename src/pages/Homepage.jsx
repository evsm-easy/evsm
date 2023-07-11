import React from 'react'
import { Footer2, Header2 } from '../components'
import logo from './logo2.png'

const Homepage = ({ token }) => {
    return (
        <div>
            {/* Navbar */}
            <Header2/>

            {/* Main Section */}
            <section className="main mt-5 animate__animated animate__fadeInDown">
                <header className="bg-success py-5">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-white mb-2">Welcome back, {token.user.user_metadata.username}</h1>
                                    <p className="lead fw-normal text-white-50 mb-4">Charge you vehicle by just one tap, Anytime and Anywhere.</p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <a className="btn btn-dark btn-lg px-4 me-sm-3" href="/wallet">Explore Wallet</a>
                                        <a className="btn btn-outline-light btn-lg px-4" href="">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5 w-50" src={logo} /></div>
                        </div>
                    </div>
                </header>
            </section>

            {/* Features Section */}
            <section className="py-5 animate__animated animate__fadeInDown" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2 className="fw-bolder mb-0">A better way to <span className="text-success">charge</span> your vehicle.</h2>
                        </div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100">
                                    <h2 className="h5"><i className="bi bi-tags text-success"></i> Affordable Price</h2>
                                    <p className="mb-0">Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <h2 className="h5"><i className="bi bi-award text-success"></i> Clear Interface</h2>
                                    <p className="mb-0">Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <h2 className="h5"><i className="bi bi-geo-alt text-success"></i> Map Access</h2>
                                    <p className="mb-0">Here is just a bit more text.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <h2 className="h5"><i className="bi bi-wallet2 text-success"></i> Wallet facility</h2>
                                    <p className="mb-0">Here is just a bit more text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <Footer2/>
        </div>
    )
}

export default Homepage