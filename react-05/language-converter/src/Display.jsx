import React, { useContext } from 'react'
import { langContext } from './Drop'
function Display() {
   let  lang=useContext(langContext)
  return (
  <>
  {lang} 
  </>
  )
}

export default Display