import React from 'react';
import './NameOnCard.scss';

export function NameOnCard() {
    return (
        <div className="nameContainer">
            <p>Name on card</p>
            <input type="text" required />
        </div>
    )
};