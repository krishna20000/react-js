import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({products, searchQuery,setSearchQuery}) => {
  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <ProductTable products={products} searchQuery={searchQuery} />
    </div>
  )
}

export default FilterableProductTable