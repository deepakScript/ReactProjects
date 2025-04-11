import React from 'react'

const CustomerList = (props) => {
  const customers = this.props.customers;
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
          {
            customers.map((customer, index) => {
              return(
                <Customer customer={customer} key={customer.id} />
              )
            })
          }
            
        </tbody>
      </table>
    </div>
  )
}

export default CustomerList
