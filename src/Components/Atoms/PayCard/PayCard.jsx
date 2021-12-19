import React from 'react';
import Line from '../../../Images/Line.png';
import './PayCard.scss';

export function PayCard() {
    return (
        <div className="paySection">
            <img src={Line} alt="Line" />
            <p>Or pay whit card</p>
            <img src={Line} alt="Line" />
        </div>
    )
};