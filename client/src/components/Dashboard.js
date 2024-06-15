import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const Dashboard = () => {
  const [usage, setUsage] = useState(null);
  const [billing, setBilling] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      axios.get(`http://localhost:5000/usage/${user.userId}`).then(response => {
        setUsage(response.data);
      });

      axios.get(`http://localhost:5000/billing/${user.userId}`).then(response => {
        setBilling(response.data);
      });
    }
  }, []);

  const generateInvoice = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwtDecode(token);
      axios.post(`http://localhost:5000/invoice/${user.userId}`).then(response => {
        alert('Invoice generated');
      });
    }
  };

  return (
    <div>
      <h1 style={{margin:'15px'}}>Dashboard</h1>
      {usage && <div>Usage: {JSON.stringify(usage)}</div>}
      {billing && <div>Billing: {JSON.stringify(billing)}</div>}
      <button onClick={generateInvoice} style={{margin:'15px',color:'blue'}}>Generate Invoice</button>
    </div>
  );
};

export default Dashboard;
