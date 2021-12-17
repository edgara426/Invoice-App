// import './App.css';
import { useState } from 'react';

function App() {

  const [invoice, setInvoice] = useState(true)
  const [companyName, setCompanyName] = useState('Company name here')
  const [companyAddress, setCompanyAddress] = useState('Company Address')
  const [companyEmail, setCompanyEmail] = useState('Company Email')
  const [companyPhone,setCompanyPhone] =useState('Company Phone #')
  const [clientName, setClientName] = useState('Client Name')
  const [clientAddress, setClientAddress] = useState('Client Address')


  return (
    <div className="App">
      
        <p>{companyName}</p> 
        <p>{companyAddress}</p>

        <p>{clientName}</p> 
        <p>{clientAddress}</p>
     
    </div>
  );
}

export default App;
