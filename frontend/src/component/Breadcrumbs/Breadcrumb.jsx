import React from 'react';
import './Breadcrumb.css';
import { RiArrowRightLine } from "react-icons/ri";

const Breadcrumb = ({ product }) => {
  return (
    <div className='breadcrumb'>
        HOME <RiArrowRightLine/> SHOP <RiArrowRightLine/> {product ? product.category : ''} <RiArrowRightLine/> {product ? product.name : ''}
    </div>
  );
}

export default Breadcrumb;
