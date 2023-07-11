import React, { useEffect, useState } from 'react';
import { supabase } from '../client'
import { Footer2, Header2 } from '../components';
import '../index.css'

const transactionsTable = 'transactions';

const History = ({ token }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const { data, error } = await supabase
                .from(transactionsTable)
                .select('*')
                .eq('email', token.user.email)
                .order('d_or_w', { ascending: false });

            if (error) {
                console.error('Error fetching transactions:', error);
                return;
            }

            setTransactions(data || []);
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            <Header2/>
            <div className="container history">
                <h2>Transaction History</h2>
            {transactions.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <table className='container table table-bordered mt-5'>
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
                            <tr key={transaction.email}>
                                <td>{transaction.date_and_time}</td>
                                <td>{transaction.upi}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.d_or_w}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            </div>
            <Footer2 />
        </div>
    );
};

export default History;
