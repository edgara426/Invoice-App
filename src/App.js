import './index.css';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Table from './components/Table';
import TableForm from './components/TableForm';

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
  const [quantity, setQuantity] = useState("")
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])

  const handlePrint = () => {
    window.print()
  }  
  return (
    <> 
       <Container>
        <Card>
          <Card.Body>
            {invoice ? (

              <div id="invoice">
                <div className="toolbar hidden-print">
                  <div className="text-end">
                    <button type="button" className="dark">
                      <i className="fa fa-print"></i> Print
                    </button>
                    <button type="button" className="danger">
                      <i className="fa fa-file-pdf-o"></i> Export as PDF
                    </button>
                  </div>
                  <hr />
                </div>
                <div className="invoice overflow-auto">
                  <div style={{minWidth: 600}}>
                    <header>
                      <div className="row">
                        <div className="col">
                          <a href="javascript;">
                            <img
                              src="assets/images/logo-icon.png"
                              width="80"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="col company-details">
                          <h2 className="name">
                            <a target="_blank" href="javascript;">
                              {companyName}
                            </a>
                          </h2>
                          <div>{companyAddress}</div>
                          <div>{companyPhone}</div>
                          <div>{companyEmail}</div>
                        </div>
                      </div>
                    </header>
                    <main>
                      <div className="row contacts">
                        <div className="col invoice-to">
                          <div className="text-gray-light">INVOICE TO:</div>
                          <h2 className="to">{clientName}</h2>
                          <div className="address">
                            {clientAddress}
                          </div>
                        </div>
                        <div className="col invoice-details">
                          <h1 className="invoice-id">{invoiceNumber}</h1>
                          <div className="date">{invoiceDate}</div>
                          <div className="date">{sentDate}</div>
                        </div>
                      </div>
                      <Table 
                      description={description}
                      quantity={quantity}
                      price={price}
                      amount={amount}
                      list={list}
                      setList={setList}
                      total={total}
                      setTotal={setTotal}
                    />
                     
                      {/* <div className="thanks">Thank you!</div> */}
                      <div className="notices">
                        <div>NOTICE:</div>
                        <div className="notice">
                          A finance charge of 1.5% will be made on unpaid balances
                          after 30 days.
                        </div>
                      </div>
                    </main>
                    <footer>
                      Invoice was created on a computer and is valid without the
                      signature and seal.
                    </footer>
                  </div>
                  <button 
        onClick={()=> setInvoice(false)}>
          Edit Invoice
        </button>
                  <div></div>
                </div>
              </div>
            ):(
              <>
             <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    value={companyAddress}
                    onChange={(e) => setCompanyAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    autoComplete="off"
                    value={companyPhone}
                    onChange={(e) => setCompanyPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={sentDate}
                    onChange={(e) => setSentDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>
              <button
                onClick={() => setInvoice(true)}

              >
                Preview Invoice
              </button>
            </div>
              </>
              )}
              </Card.Body>
            </Card>
          </Container>
    </> 
  );
}

export default App;

