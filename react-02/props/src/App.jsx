
import './App.css'
import FilterableProductTable from './components/FilterableProductTable';
import { useState } from "react";



const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
  
];


function App() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex justify-center items-center h-screen">
    <div className='m-5 border w-120 p-5 '>
      <FilterableProductTable 
      products={PRODUCTS}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery} />
    </div>
    </div>
  )
}



export default App

