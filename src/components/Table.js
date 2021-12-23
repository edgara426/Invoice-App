import React from 'react'

export default function Table({ list, total }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th className="text-left">DESCRIPTION</th>
            <th className="text-right">QUANTITY</th>
            <th className="text-right">PRICE</th>
            <th className="text-right">TOTAL</th>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          
            <tbody>
              <tr className="border">
                <td className="no"></td>
                <td className="text-left">{description}</td>
                <td  className="unit">{quantity}</td>
                <td className="qty">${price}</td>
                <td className="total">{amount}</td>
              </tr>
            </tbody>
    
        ))}
        <tfoot>
        <tr>
  <td colSpan="2"></td>
  <td colSpan="2">GRAND TOTAL</td>
  <td> $ {total.toLocaleString()}.00</td>
</tr>
</tfoot>
      </table>

    </>
  )
}

