import React from 'react'

export const Input = () => {
  return (
    <>
      <input className='ml-2 mb-3 border p-1' type="text" placeholder='Search...'/><br/>
      <input id='checkbox' className='mb-3  ml-2' type='checkbox'/>
      <label  htmlFor='checkbox' className='ml-2'>Only show products in stock</label>
    </>
  )
}

export default Input
