// import './App.css';
import { useState } from 'react';

function App() {

  const [invoice, setInvoice] = useState(true)
  const [companyInfo, setCompanyInfo] = useState({
    companyName: 'CompanyName', 
    companyAddress: 'CompanyAddress', 
    companyEmail: 'CompanyEmail', 
    companyPhone: 'CompanyPhone'})
  // const [companyName, setCompanyName] = useState('Company name here')
  // const [companyAddress, setCompanyAddress] = useState('Company Address')
  // const [companyEmail, setCompanyEmail] = useState('Company Email')
  // const [companyPhone,setCompanyPhone] =useState('Company Phone #')
  const [clientInfo, setClientInfo] = useState({
    clientName: 'ClientName',
    clientAddress:  'ClientAddress'
  })
  const [clientName, setClientName] = useState('Client Name')
  const [clientAddress, setClientAddress] = useState('Client Address')
  const [invoiceNumber, setInvoiceNumber] = useState('0')
  const [invoiceDate, setInvoiceDate] = useState('12/17/2021')
  const [sentDate, setSentDate] = useState('12/17/2021')

  return (
    <div className="App">
      
        <p>{companyInfo.companyName}</p> 
        <p>{companyInfo.companyAddress}</p>
        <p>{companyInfo.companyEmail}</p>
        <p>{companyInfo.companyPhone}</p>

        <p>{clientInfo.clientName}</p> 
        <p>{clientInfo.clientAddress}</p>
     
    </div>
  );
}

export default App;
