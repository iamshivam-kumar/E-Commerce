import React from 'react';
import Item from '../Item/Item';
import './NewCollections.css';
import data_newCollection from '../data/NewCollection_data';

const NewCollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
        {data_newCollection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price} />
          })}
            {/* {Item.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.Image} new_price={item.new_price} old_price={item.old_price}/>
            })} */}


        </div>

    </div>
  )
}
export default NewCollections;
