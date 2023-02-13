import React from 'react';

function Cart({ currentCartState, removeItem }) {
    const rentals = currentCartState.map((rental, idx) => {
        return <div className='' key={idx}>
            <span className='grid-item'> {rental.title}</span>
            <span className='grid-item'> Price ${rental.price}</span>
            <span className='button' type="button" rentaltitle={rental.title} id={idx} onClick={removeItem}>Remove from Cart</span>
        </div >
    });

    return (
        <>
            <h1>Shopping cart</h1>
            <div className='grid-container'>
                {rentals}
            </div>
        </>

    )
}

export default Cart