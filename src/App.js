// import './App.css';
import { useState } from 'react';

function App() {

  const [invoice, setInvoice] = useState(true)
  // const [companyInfo, setCompanyInfo] = useState({
  //   companyName: 'CompanyName', 
  //   companyAddress: 'CompanyAddress', 
  //   companyEmail: 'CompanyEmail', 
  //   companyPhone: 'CompanyPhone'})
  const [companyName, setCompanyName] = useState('Company name here')
  const [companyAddress, setCompanyAddress] = useState('Company Address')
  const [companyEmail, setCompanyEmail] = useState('Company Email')
  const [companyPhone,setCompanyPhone] =useState('Company Phone #')
  // const [clientInfo, setClientInfo] = useState({
  //   clientName: 'ClientName',
  //   clientAddress:  'ClientAddress'
  // })
  const [clientName, setClientName] = useState('Client Name')
  const [clientAddress, setClientAddress] = useState('Client Address')
  // const [invoiceInfo, setInvoiceInfo] = useState({
  //   invoiceNumber: '0',
  //   invoiceDate: '12/17/2021',
  //   sentDate: '12/17/2021'
  // })
  const [invoiceNumber, setInvoiceNumber] = useState('0')
  const [invoiceDate, setInvoiceDate] = useState('12/17/2021')
  const [sentDate, setSentDate] = useState('12/17/2021')
  // const [work, setWork] = useState({
  //   description: '',
  //   price: '',
  //   amount: '',
  //   total: 0
  // })
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])

  return (
    <> 
    <div>
    {invoice ? (
        <div className="App">
        <p>{companyName}</p> 
        <p>{companyAddress}</p>
        <p>{companyEmail}</p>
        <p>{companyPhone}</p>

        <p>{clientName}</p> 
        <p>{clientAddress}</p>


        <p>{invoiceDate}</p>
        <p>{invoiceNumber}</p>
        <p>{sentDate}</p>


        <p>{description}</p>
        <p>{price}</p>
        <p>{amount}</p>
        <p>{total}</p>
        <p>{list}</p>

        <button 
        onClick={()=> setInvoice(false)}>
          Edit Info
        </button>
        </div>
      ):(
        <div>
          <h1>Edit section</h1>
          <article>
            <div>
              <label>CompanyName</label>
              <input
                type="text"
                name="text"
                placeholder="CompanyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div>
              <label>CompanyAddress</label>
              <input
                type="text"
                name="text"
                placeholder="CompanyAddress"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
          </article>

          <article>
            <div>
              <label>CompanyEmail</label>
              <input
                type="text"
                name="text"
                placeholder="CompanyEmail"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
            </div>

            <div>
              <label>CompanyPhone</label>
              <input
                type="text"
                name="text"
                placeholder="CompanyPhone"
                value={companyPhone}
                onChange={(e) => setCompanyPhone(e.target.value)}
              />
            </div>
          </article>
          <button 
        onClick={()=> setInvoice(true)}>
          Preview Invoice
        </button>
        </div>
      )}
      </div>
    </> 
  );
}

export default App;
