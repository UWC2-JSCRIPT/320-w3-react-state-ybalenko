import React, { useState } from 'react';
import './App.css';
import RenderBnbs from './Rentals';
import Cart from './Cart.jsx'


function App() {
    const [cartRentalItem, addCartRentalItem] = useState([]);
    const addRentalToCart = (event) => {
        const newItem = {
            title: event.target.getAttribute('rentaltitle'),
            price: event.target.getAttribute('rentalprice')
        }
        addCartRentalItem([...cartRentalItem, newItem]);
    };

    const removeFromCart = (event) => {
        const newCartState = [];
        const titleToRemove = event.target.getAttribute('rentaltitle');
        cartRentalItem.forEach((item) => {
            if (titleToRemove !== item.title) {
                newCartState.push(item);
            }
        })
        addCartRentalItem(newCartState)
    }

    return (
        <div className="App">
            <div className="grid_container">
                <div className="grid_container">
                    <RenderBnbs
                        addItem={addRentalToCart} />
                </div>
            </div>
            <div className="grid_container"></div>
            <Cart
                currentCartState={cartRentalItem}
                removeItem={removeFromCart} />
        </div>
    );
}

export default App;
