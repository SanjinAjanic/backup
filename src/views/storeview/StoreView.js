import React, {useState} from 'react'

export const StoreView = () => {
    const [items, setItems] = useState(0);
    return (
        <div>
            <h1>Our Products</h1>
            <buttom onClick={() => setItems(items + 1)}>+</buttom>
            <span>{items}</span>
            <buttom onClick={() => {
                if(items >= 1) setItems(items - 1)}}>-</buttom>
        </div>
    );
};
