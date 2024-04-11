import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './components/Sidebar/Addproduct/AddProduct'
import ListProduct from './components/Sidebar/ListProduct/ListProduct'

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
    </div>
  )
}

export default App