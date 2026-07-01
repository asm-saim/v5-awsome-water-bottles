import React from 'react';
import "./Bottle.css"

const Bottle = ({ bottle }) => {
    const { img, name, price } = bottle
    // console.log(bottle)
    return (
        <div className='bottle-card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>{price}</h4>
        </div>
    );
};

export default Bottle;