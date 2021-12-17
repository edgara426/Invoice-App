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
  // const [clientName, setClientName] = useState('Client Name')
  // const [clientAddress, setClientAddress] = useState('Client Address')
  const [invoiceInfo, setInvoiceInfo] = useState({
    invoiceNumber: '0',
    invoiceDate: '12/17/2021',
    sentDate: '12/17/2021'
  })
  // const [invoiceNumber, setInvoiceNumber] = useState('0')
  // const [invoiceDate, setInvoiceDate] = useState('12/17/2021')
  // const [sentDate, setSentDate] = useState('12/17/2021')
  const [work, setWork] = useState({
    description: '',
    price: '',
    amount: '',
    total: 0
  })
  // const [description, setDescription] = useState('')
  // const [price, setPrice] = useState('')
  // const [amount, setAmount] = useState('')
  // const [total, setTotal] = useState(0)
  const [list, setList] = useState([])

  return (
    <> 
    <div>
    {invoice ? (
        <div className="App">
        <p>{companyInfo.companyName}</p> 
        <p>{companyInfo.companyAddress}</p>
        <p>{companyInfo.companyEmail}</p>
        <p>{companyInfo.companyPhone}</p>

        <p>{clientInfo.clientName}</p> 
        <p>{clientInfo.clientAddress}</p>


        <p>{invoiceInfo.invoiceNumber}</p>
        <p>{invoiceInfo.invoiceDate}</p>
        <p>{invoiceInfo.sentDate}</p>


        <p>{work.description}</p>
        <p>{work.price}</p>
        <p>{work.amount}</p>
        <p>{work.total}</p>
        <p>{list}</p>

        <button 
        onClick={()=> setInvoice(false)}>
          Edit Info
        </button>
        </div>
      ): (
        <div>
          <h1>Edit section</h1>
        </div>
      )}
      </div>
    </> 
  );
}

export default App;
