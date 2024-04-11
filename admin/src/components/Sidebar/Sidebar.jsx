import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:'none'}}>
            <div className='sidebar-item'>
                <img src='https://tse2.mm.bing.net/th?id=OIP._0a__DKETNmKcTdB2-0xRwHaHy&pid=Api&P=0&h=180' alt=''/>
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:'none'}}>
            <div className='sidebar-item'>
                <img src='https://tse2.mm.bing.net/th?id=OIP.ekkkgaTRvBxhr_WiX-PhdQHaHa&pid=Api&P=0&h=180' alt=''/>
                <p>Product List</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar