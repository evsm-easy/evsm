import React, { useState } from 'react'
import { supabase } from '../client'
import { Footer2, Header2 } from '../components';
import { useNavigate } from 'react-router-dom';

const Deposit = ({token}) => {
  const [balance, setAmount] = useState('');
  const [upi, setUpi] = useState('');
  const navigate = useNavigate();

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleUPI = (e) =>{
    setUpi(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Fetch previous balance from Supabase
    const { data, error } = await supabase
      .from('account')
      .select("*")
      .eq('email', token.user.email)

      
      if (error) {
        console.error('Error fetching previous balance:', error);
        return;
      }
      
      const previousBalance = data[0]?.amount || 0;
      const newBalance = previousBalance + Number(balance);
      
      const now = new Date();
      const createdAt = now.toISOString();


    // Update the balance in Supabase
    const { data2, error2} = await supabase
      .from('account')
      .update({ amount: newBalance })
      .eq('email', token.user.email)

    const { data3, error3} = await supabase
      .from('transactions')
      .insert({ email: token.user.email, amount: balance, date_and_time: now, upi: upi, d_or_w: 'Deposited'})

    if (error2) {
      console.error('Error updating balance:');
      return;
    }


    alert('Amount is deposited in your wallet successfully.')
    navigate('/wallet')
    console.log('Balance updated successfully:');
    setAmount('');
    setUpi('')
};

  return (
    <div className='mt-5'>
      <Header2/>
      <section className="container animate__animated animate__fadeIn mb-5">
                <div className="p-5 bg-image"></div>

                <div className="shadow-lg card mx-4 mx-md-5 shadow-5-strong">
                    <div className="card-body py-5 px-md-5">

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-5">Deposit</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="upi">UPI</label>
                                        <input type="email" id="upi" value={upi} name='upi' className="form-control" onChange={handleUPI}/>
                                    </div>

                                        <div className="col-md-12 mb-4">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="amount">Amount</label>
                                                <input type="number" value={balance} id="amount" placeholder='00' name='amount' className="form-control" onChange={handleAmountChange} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="password">Date & Time</label>
                                        <input type="text" readOnly id="password" defaultValue={new Date()} name='password' className="form-control"/>
                                    </div>

                                    <button type="submit" className="btn btn-success btn-block mb-4">
                                        Deposit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer2/>
      {/* <label> */}
        {/* Amount: */}
        {/* <input type="number" value={balance} onChange={handleAmountChange} />
      </label>
      <button type="submit">Add to Balance</button> */}
    </div>
  );
};

export default Deposit;
