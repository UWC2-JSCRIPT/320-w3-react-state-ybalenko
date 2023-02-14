import React from 'react';
import bnbs from './bnbs.json';


function RenderBnbs({ addItem }) {

    const rentals = bnbs.map((rental, idx) => {
        return <div className='rental-items' key={idx}>
            <h4>{rental.title}</h4>
            <img className='rental-img' src={rental.image} alt={rental.title} />
            <span className='grid-item'> Location: {rental.location.city}</span>
            <span className='grid-item'> Rental cost $ {rental.payment.cost}</span>
            <span className='button' type="button" rentaltitle={rental.title} rentalprice={rental.payment.cost} id={idx} onClick={addItem}>Add to Cart</span>
        </div >
    });
    return (
        <>
            <h1>Find your perfect vacation rental</h1>
            <div className='grid-container'>
                {rentals}
            </div>
        </>
    );
}

export default RenderBnbs
