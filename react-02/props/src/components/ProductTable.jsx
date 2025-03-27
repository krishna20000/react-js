import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({products ,searchQuery}) => {
  let rows = [];
  let lastCategory = null;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  filteredProducts.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      lastCategory = product.category;
    }
    rows.push(<ProductRow product={product} key={product.name} /> );
    });
  

  return (
    <table border="1">
      <thead>
        <tr>
          <th className='text-left pl-4 pt-3'>Name</th>
          <th className='pt-3 text-center'>Price</th>
          <th className='pt-3 '>Stock</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default ProductTable