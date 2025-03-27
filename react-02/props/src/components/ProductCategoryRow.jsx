import React from 'react'

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2" className='pl-25 pt-2 pb-3'>{category}</th>
    </tr>
  )
}

export default ProductCategoryRow