import React, { useEffect, useState } from 'react'
import { Footer2, Header2 } from '../components'
import logo from './logo2.png'
import { supabase } from '../client'


const Stations = ({token}) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [seller, setSeller] = useState([]);

    useEffect(() => {
        const fetchSeller = async () => {
            const { data, error } = await supabase
                .from('stations')
                .select('*')

            if (error) {
                console.error('Error fetching seller:', error);
                return;
            }

            setSeller(data || []);
        };

        fetchSeller();
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                },
                error => {
                    console.log(error.message);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    }, []);

    const redirectToGoogleMaps = () => {
        if (latitude && longitude) {
            const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
            window.location.href = url;
        }
    };

    return (
        <div>
            {/* Navbar */}
            <Header2 />

            {/* Main Section */}
            <section class="main mt-5 animate__animated animate__fadeInDown">
                <header class="bg-success py-5">
                    <div class="container px-5">
                        <div class="row gx-5 align-items-center justify-content-center">
                            <div class="col-lg-8 col-xl-7 col-xxl-6">
                                <div class="my-5 text-center text-xl-start">
                                    <h1 class="display-5 fw-bolder text-white mb-2">Current Location:</h1>
                                    <p class="lead fw-normal text-white-50 mb-4" id="coord"> Latitude: {latitude} <br /> Longitude: {longitude}</p>
                                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <button class="btn btn-outline-light btn-lg px-4" id="map" onClick={redirectToGoogleMaps}><i
                                            class="bi bi-geo-alt"></i> Map</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5 w-50"
                                src={logo} /></div>
                        </div>
                    </div>
                </header>
            </section>

            {/* Stations */}
            <section class="py-5 animate__animated animate__fadeInDown" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h2 class="fw-bolder mb-0">Explore nearby <span class="text-success"><br />Stations</span></h2>
                        </div>
                        <div class="col-lg-8">
                            {/* <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr. No.</th>
                                        <th scope="col">Stations</th>
                                        <th scope="col">Distance</th>
                                        <th scope="col">Map</th>
                                        <th scope="col">Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>AMC Quarters, Ahmedabad</td>
                                        <td id="amc"></td>
                                        <td><a href="http://maps.google.com?q=23.001623,72.617221" class="btn btn-outline-success"
                                            target="_blank">View</a></td>
                                        <td class=""><a href="" class="text-success text-decoration-none">Book</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>CTM, Ahmedabad</td>
                                        <td id="amc"></td>
                                        <td><button class="btn btn-outline-success">View</button></td>
                                        <td class=""><a href="" class="text-success text-decoration-none">Book</a></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Navrangpura, Ahmedabad</td>
                                        <td id="amc"></td>
                                        <td><button class="btn btn-outline-success">View</button></td>
                                        <td class=""><a href="" class="text-success text-decoration-none">Book</a></td>
                                    </tr>
                                </tbody>
                            </table> */}
                            <div className="container">
                                {seller.length === 0 ? (
                                    <p>No seller found.</p>
                                ) : (
                                    <table className='container table table-bordered mt-5'>
                                        <thead>
                                            <tr>
                                                <th>Station's name</th>
                                                <th>Address</th>
                                                <th>Load</th>
                                                <th>Cost</th>
                                                <th>Book</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {seller.map((seller) => (
                                                <tr key={seller.email}>
                                                    <td>{seller.station_name}</td>
                                                    <td>{seller.address}</td>
                                                    <td>{seller.ports}</td>
                                                    <td>{seller.cost}</td>
                                                    <td><a href="/booking" type='button' className='btn btn-outline-success' defaultValue={seller.email}>Book</a></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Footer */}
            <Footer2 />
        </div>
    )
}

export default Stations