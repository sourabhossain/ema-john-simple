import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    const tax = Math.round(total / 10).toFixed(2);

    if (total >= 100) {
        shipping = 0;
    } else if (total >= 50) {
        shipping = 25;
    } else if (total > 0) {
        shipping = 50;
    }
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shipping Price: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total Price: {total + shipping + Number(tax)}</p>
        </div>
    );
};

export default Cart;