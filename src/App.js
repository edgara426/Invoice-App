// import './App.css';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';

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

  const handlePrint = () => {
    window.print()
  }  
  return (
    <> 
    {/* <div className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
    {invoice ? (

        <div >
          <section>
        <h2>{companyName}</h2> 
        <p>{companyAddress}</p>
        <p>{companyEmail}</p>
        <p>{companyPhone}</p>

          </section>

        <p >{clientName}</p> 
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

        <button 
        onClick={handlePrint}>
          Print
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

          <article>
          
          <div>
              <label>ClientName</label>
              <input
                type="text"
                name="text"
                placeholder="clientName"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
            </div>

            <div>
              <label>ClientAddress</label>
              <input
                type="text"
                name="text"
                placeholder="clientAddress"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
            </div>
          </article>

          <article>
          
          <div>
              <label>InvoiceNumber</label>
              <input
                type="text"
                name="text"
                placeholder="InvoiceNumber"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>

            <div>
              <label>InvoiceDate</label>
              <input
                type="text"
                name="text"
                placeholder="invoiceDate"
                value={invoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
            <div>
              <label>SentDate</label>
              <input
                type="text"
                name="text"
                placeholder="sentDate"
                value={sentDate}
                onChange={(e) => setSentDate(e.target.value)}
              />
            </div>
          </article>
          <button 
        onClick={()=> setInvoice(true)}>
          Preview Invoice
        </button>
        </div>
      )}
      </div> */}
       <Container>
        <Card>
          <Card.Body>
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
                    <table>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th className="text-left">DESCRIPTION</th>
                          <th className="text-right">HOUR PRICE</th>
                          <th className="text-right">HOURS</th>
                          <th className="text-right">TOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="no">04</td>
                          <td className="text-left">
                            <h3>
                              <a target="_blank" href="javascript;">
                                Youtube channel
                              </a>
                            </h3>
                            <a target="_blank" href="javascript;">
                              Useful videos
                            </a>{' '}
                          </td>
                          <td className="unit">$0.00</td>
                          <td className="qty">100</td>
                          <td className="total">$0.00</td>
                        </tr>
                        <tr>
                          <td className="no">01</td>
                          <td className="text-left">
                            <h3>Website Design</h3>Creating a recognizable
                            design solution based on the company's existing
                            visual identity
                          </td>
                          <td className="unit">$40.00</td>
                          <td className="qty">30</td>
                          <td className="total">$1,200.00</td>
                        </tr>
                        <tr>
                          <td className="no">02</td>
                          <td className="text-left">
                            <h3>Website Development</h3>Developing a Content
                            Management System-based Website
                          </td>
                          <td className="unit">$40.00</td>
                          <td className="qty">80</td>
                          <td className="total">$3,200.00</td>
                        </tr>
                        <tr>
                          <td className="no">03</td>
                          <td className="text-left">
                            <h3>Search Engines Optimization</h3>Optimize the
                            site for search engines (SEO)
                          </td>
                          <td className="unit">$40.00</td>
                          <td className="qty">20</td>
                          <td className="total">$800.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colspan="2"></td>
                          <td colspan="2">SUBTOTAL</td>
                          <td>$5,200.00</td>
                        </tr>
                        <tr>
                          <td colspan="2"></td>
                          <td colspan="2">TAX 25%</td>
                          <td>$1,300.00</td>
                        </tr>
                        <tr>
                          <td colspan="2"></td>
                          <td colspan="2">GRAND TOTAL</td>
                          <td>$6,500.00</td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="thanks">Thank you!</div>
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
                <div></div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </> 
  );
}

export default App;

