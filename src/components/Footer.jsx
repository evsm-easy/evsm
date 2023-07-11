import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
        <section className="footer">
                <footer className="text-center bg-success text-white">
                    <div className="container p-4 pb-0">
                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Register for free</span>
                                <a href='/signup' className="btn btn-outline-light btn-rounded">
                                    Sign up!
                                </a>
                            </p>
                        </section>
                    </div>
                    <div className="text-center p-3">
                        © 2023 Copyright:
                        <a className="text-white" href="/">EVSM.com</a>
                    </div>
                </footer>
            </section>
    </div>
  )
}

export default Footer