import React from 'react';

const Basket = ({ basket, clearBasket }) => {
    const totalCost = basket.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="basket-container">
            <h2>Your Basket</h2>
            <ul>
                {basket.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            <h3>Total Cost: ${totalCost}</h3>
            <button onClick={clearBasket}>Clear Basket</button>
        </div>
    );
}

export default Basket;