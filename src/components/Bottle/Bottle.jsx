// import React from 'react';
import "./Bottle.css"

const Bottle = ({ bottle, handlePurchase }) => {
    const { img, name, price, stock } = bottle
    // console.log(bottle)
    return (
        <div className='bottle-card img-size'>
            <img className="img-fit" src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Remaining: {stock}</p>
            <button onClick={() => handlePurchase(bottle)} className="btn">Buy Now</button>

        </div>
    );
};

export default Bottle;