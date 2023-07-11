import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '../client'
import "../index.css"
import logo from './logo2.png'

const Admin_Dashboard = ({ token }) => {

    let navigate = useNavigate()
    var [seller, setSeller] = useState([]);

    // const [isRunning, setIsRunning] = useState(false);

    // const handleToggle = () => {
    //     setIsRunning(!isRunning);
    //     if(isRunning){
    //         handleStop();
    //     }
    // };

    // const handleStop = () => {
    //     alert('hello')
    // }

    const fetchUsers = async () => {
        try {
            const { data, error } = await supabase
                .from('stations')
                .select('*')
                .eq('email', token.user.email);
            seller = data

            if (error) {
                throw error;
            }

            setSeller(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    function handleLogout() {
        sessionStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div>

            {/* Navbar */}
            <nav class="navbar dash_nav navbar-expand-lg">
                <div class="container-fluid">
                    <a href="" className="navbar-brand text-white"><i className="bi bi-ev-station"></i>SM<sup>seller</sup></a>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto d-flex justify-content-center align-items-center">
                            <nav class="navbar">
                                <form class="container-fluid">
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" class="form-control" readOnly defaultValue={seller[0]?.station_name} aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </form>
                            </nav>
                            <a href="" className='nav-link text-white' type='button' onClick={handleLogout}>Logout <i class="bi bi-box-arrow-right"></i></a>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Header */}

            <div class="tab-content" id="ex2-content">
                <div
                    class="tab-pane fade show active"
                    id="ex2-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1"
                >

                    {/* Cards */}
                    <div className="cards container mt-5 mb-5">
                        <div class="row">
                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-primary shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    Earnings (Monthly)</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800"><i class="bi bi-currency-rupee"></i>40,000</div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="h3 bi bi-cash-coin"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-success shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                    Wallet</div>
                                                <div class="mb-0 font-weight-bold text-gray-800">{Object.keys(seller).map((key) => (
                                                    <h5 key={'amount'}>
                                                        <i class="bi bi-currency-rupee"></i>{seller[0].amount}.00
                                                    </h5>
                                                ))}</div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i><i class="bi bi-wallet2 h3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-info shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Loads
                                                </div>
                                                <div class="row no-gutters align-items-center">
                                                    <div class="col-auto">
                                                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{Object.keys(seller).map((key) => (
                                                            <h5 key={'ports'}>
                                                                <i class="bi bi-ev-station"></i> {seller[0].ports}
                                                            </h5>
                                                        ))}</div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-auto">
                                                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-md-6 mb-4">
                                <div class="card border-left-warning shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="row no-gutters align-items-center">
                                            <div class="col mr-2">
                                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                    Cost</div>
                                                <div class="h5 mb-0 font-weight-bold text-gray-800">{Object.keys(seller).map((key) => (
                                                    <h5 key={'cost'}>
                                                        <i class="bi bi-currency-rupee"></i> {seller[0].cost}/kWh
                                                    </h5>
                                                ))}</div>
                                            </div>
                                            <div class="col-auto">
                                                <i class="bi bi-lightning-charge-fill h3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div
                    class="cards tab-pane fade"
                    id="ex2-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-2"
                >
                    <section className="dash_main animate__animated animate__fadeInDown">
                        <header className="py-5">
                            <div className="container px-5">
                                <div className="row gx-5 align-items-center justify-content-center">
                                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                                        <div className="my-5 text-center text-xl-start">
                                            <div className="d-flex">
                                                <div className="">
                                                    <h1 className="text-white">Current Balance : <i className="bi bi-currency-rupee text-white"></i></h1>
                                                </div>
                                                <span className='text-white'>{Object.keys(seller).map((key) => (
                                                    <h1 key={'amount'}>
                                                        {seller[0].amount}.00
                                                    </h1>
                                                ))}</span></div>
                                            <div className="mt-5 d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                                <a className="btn btn-outline-light btn-lg px-4" href="">Withdraw</a>
                                                {/* <div className="App">
                                                    {isRunning ? (
                                                        <button onClick={handleToggle}>Stop</button>
                                                    ) : (
                                                        <button onClick={handleToggle}>Start</button>
                                                    )}
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><h1 className='dash_wallet text-white'><i className="bi bi-ev-station"></i><sup>seller</sup></h1></div>
                                </div>
                            </div>
                        </header>
                    </section>

                </div>
                <div
                    class=" cards tab-pane fade"
                    id="ex2-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-3"
                >
                    Tab 3 content
                </div>
            </div>

            <ul class="nav nav-tabs nav-fill" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link active"
                        id="ex2-tab-1"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-1"
                        role="tab"
                        aria-controls="ex2-tabs-1"
                        aria-selected="true"
                    >Dashboard</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex2-tab-2"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-2"
                        role="tab"
                        aria-controls="ex2-tabs-2"
                        aria-selected="false"
                    >Wallet</a
                    >
                </li>
                <li class="nav-item" role="presentation">
                    <a
                        class="nav-link"
                        id="ex2-tab-3"
                        data-bs-toggle="tab"
                        href="#ex2-tabs-3"
                        role="tab"
                        aria-controls="ex2-tabs-3"
                        aria-selected="false"
                    >Notifications</a
                    >
                </li>
            </ul>



            {/* Footer */}
            <section className="footer dash_footer">
                <footer className="text-center text-white">
                    <div className="text-center p-3">
                        © 2023 Copyright:
                        <a className="text-white" href="/">EVSM.com</a>
                    </div>
                </footer>
            </section>

        </div>
    )
}

export default Admin_Dashboard