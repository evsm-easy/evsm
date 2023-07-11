import React, { useEffect, useState } from 'react'
import { Footer2, Header2 } from '../components'
import logo from './logo2.png'
import { supabase } from '../client'
import History from './History'

const transactionsTable = 'transactions';

const Wallet = ({ token }) => {
    const [transactions, setTransactions] = useState([]);
    var [account, setUsers] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const { data, error } = await supabase
                .from(transactionsTable)
                .select('*')
                .eq('email', token.user.email)
                .order('d_or_w', { ascending: false })
                .limit(5);

            if (error) {
                console.error('Error fetching transactions:', error);
                return;
            }

            setTransactions(data || []);
        };

        fetchTransactions();
    }, []);

    const fetchUsers = async () => {
        try {
            const { data, error } = await supabase
                .from('account')
                .select('*')
                .eq('email', token.user.email);
            account = data

            if (error) {
                throw error;
            }

            setUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <div>
            {/* Navbar */}
            <Header2 />

            {/* Main Section */}
            <section className="main mt-5 animate__animated animate__fadeInDown">
                <header className="bg-success py-5">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <div className="d-flex">
                                        <div className="">
                                            <h1 className="text-white">Current Balance : <i className="bi bi-currency-rupee text-white"></i></h1>
                                        </div>
                                        <span className='text-white'>{Object.keys(account).map((key) => (
                                            <h1 key={'amount'}>
                                                {account[0].amount}.00
                                            </h1>
                                        ))}</span></div>
                                    <div className="mt-5 d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <a className="btn btn-dark btn-lg px-4 me-sm-3" href="/deposit">Deposit</a>
                                        <a className="btn btn-outline-light btn-lg px-4" href="/withdraw">Withdraw</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5 w-50" src={logo} /></div>
                        </div>
                    </div>
                </header>
            </section>

            {/* Transactions */}
            <section className="py-5 animate__animated animate__fadeInDown" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2 className="fw-bolder mb-0">Recent <span className="text-success">Transactions</span></h2>
                        </div>
                        <div className="col-lg-8">
                            <table className='container table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Date and Time</th>
                                        <th>UPI</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr key={transactions.id}>
                                            <td>{transaction.date_and_time}</td>
                                            <td>{transaction.upi}</td>
                                            <td>{transaction.amount}</td>
                                            <td>{transaction.d_or_w}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h2 className="fw-bolder mb-0"><a href='/history' className="h6">View all<i class="bi bi-arrow-right"></i></a></h2>
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            <Footer2 />
        </div>
    )
}

export default Wallet