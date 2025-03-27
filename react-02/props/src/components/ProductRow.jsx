import React from 'react'

const ProductRow = ({ product }) => {
  return (
    <tr>
      <td className='pr-20'>{product.name}</td>
      <td className='pb-1 pr-20 pl-15'>{product.price}</td>
      <td className={`pb-1 pl-5 ${product.stocked ? 'text-green-500' : 'text-red-500'}`}>
      {product.stocked ? 'In Stock' : 'Out of Stock'}</td>
    </tr>
  )
}

export default ProductRow