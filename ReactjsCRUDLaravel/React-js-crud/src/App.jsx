import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './App.css'
import myForm from './Components/myForm'
import CustomerList from './Components/CustomerList'

function App() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "http://localhost:8000/api/customers";

  const getCustomers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div>
      <div className='ui fixed inverted menu'>
        <div className='ui container center'>
          <a href="/#" className='header item'>
          React JS with Laravel   API
          </a>
        </div>
      </div>
        <CustomerList customers={customers} />
      <div className='ui container main'>
        <myForm />
        <CustomerList customers={this.state.customers} />
      </div>
    </div>
  )
}

export default App
