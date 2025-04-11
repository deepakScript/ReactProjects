import React from 'react'

const Customer = (props) => {
  const {id, first_name, last_name, email} = this.props.customer
  return (
    <tr>
      <td>{id}</td>
      <td>{`${first_name} ${last_name}`}</td>
      <td>{email}</td>
      <td>
        <button className='ui button blue'>Edit</button>
        <button className='ui button red'>Delete</button>
      </td>
    </tr>
  )
}

export default Customer
