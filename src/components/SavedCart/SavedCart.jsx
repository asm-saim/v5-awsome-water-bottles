import './SavedCart.css'


const SavedCart = ({ purchase, handleRemoveIDFromCart}) => {
    // console.log("H", purchase)
    return (
        <div className="cart-size">
            {
                purchase.map(bottle => <div key={bottle.id}>
                    <img src={bottle.img} alt="" />
                    <button onClick={() => handleRemoveIDFromCart(bottle.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default SavedCart;