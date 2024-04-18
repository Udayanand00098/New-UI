// app.js
import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    var options = {
      key: "rzp_test_boXpT1w7FW6xiq",
      key_secret: "NgAgqg8Jtn64Lgm5jhDwyL4p",
      amount: amount * 100,
      currency: "INR",
      name: "Payment Gateway",
      description: "for testing",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Synergy Universal",
        email: "gadilakarthikreddy2@gmail.com",
        contact: mobile,
      },
      notes: {
        address: "Madhapur"
      },
      theme: {
        color: "#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }

  return (
    <div className="App">
      <div className='form-container'>
        <h2>Payment Gateway</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <h3>Name</h3>
            <input type='text' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='input-group'>
            <h3>Email</h3>
            <input type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='input-group'>
            <h3>Mobile</h3>
            <input type='text' placeholder='Enter Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>

          <div className='input-group'>
            <h3>Amount</h3>
            <input type='text' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>

          <button type="submit">Pay</button>
        </form>
      </div>
    </div>
  );
}

export default App;
