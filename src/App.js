import './App.css';
import { useState } from 'react';

function App() {

  const [invoice, setInvoice] = useState(true)
  const [companyName, setCompanyName] = useState('Company name here')
  const [companyAddress, setCompanyAddress] = useState('Company Address')
  const [companyEmail, setCompanyEmail] = useState('Company Email')
  const [companyPhone,setCompanyPhone] =useState('Company Phone #')


  return (
    <div className="App">
      
        <p>{companyName}</p> 
        <p>{companyAddress}</p>
     
    </div>
  );
}

export default App;
