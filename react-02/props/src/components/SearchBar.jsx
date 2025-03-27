import React from 'react'

const SearchBar = ({searchQuery, setSearchQuery}) => {
  return (
    <form>
      <input className='mb-3 rounded-3xl text-2xl  border p-1 px-5'  type='text' placeholder='Search...'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} /><br/>
      <label className='flex items-center'>
        <input className='form-checkbox h-5 w-5  mr-3' type='checkbox' />Only show products in stock
      </label>
    </form>
  )
}

export default SearchBar