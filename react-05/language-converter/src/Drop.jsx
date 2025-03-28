import React, { createContext, useState } from 'react'
import Display from './Display'
export const langContext=createContext()

export function Drop() {
    const [select,setSelectedLang]=useState("यह हिंदी है")

    const handelChange=(e)=>{
        setSelectedLang(e.target.value)
    }
    
  return (
    <>
   <select value={select} onChange={handelChange}>
    <option value="यह हिंदी है">Hindi</option>
    <option value="this is english">English</option>
    <option value="हा मराठी आहे">marathi</option>
    <option value="यह गुजराती है">Gujrati</option>
   </select>
   <br />
<langContext.Provider value={select}>
   <Display/>
  </langContext.Provider>
   </>
  )
}

