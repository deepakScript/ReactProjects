import React from 'react'

const myForm = () => {
  return (
    <form action="">
        <div className='fields'>
            <label htmlFor="">First Name</label>
            <input type="text" name="first_name" id="" placeholder='Enter First Name' />
        </div>

        <div className='fields'>
            <label htmlFor="">Last Name</label>
            <input type="text" name="last_name" id="" placeholder='Enter Last Name' />
        </div>

        <div className='fields'>
            <label htmlFor=""> Email</label>
            <input type="text" name="e-mail" id="" placeholder='Enter  Your Email' />
        </div>

        <div className='fields'>
            <button>Save</button>
        </div>
    </form>
  )
}

export default myForm
