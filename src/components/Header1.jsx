import React from 'react'

const Header1 = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                <div className="container">
                    <a href="" className="navbar-brand"><i className="bi bi-ev-station"></i>SM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li>
                                <div class="btn-group">
                                    <button type="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        Register
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                        <li><a class="dropdown-item" type="button" href='/signup'>as User</a></li>
                                        <li><a class="dropdown-item" type="button" href='/seller_signup'>as Seller</a></li>
                                    </ul>
                                </div>
                                <div class="btn-group">
                                    <button type="button" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        Login
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                        <li><a class="dropdown-item" type="button" href='/login'>as User</a></li>
                                        <li><a class="dropdown-item" type="button" href='/seller_login'>as Seller</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header1