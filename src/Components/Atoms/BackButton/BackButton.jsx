import React from 'react';
import LeftArrow from '../../../Images/LeftArrow.png';
import './BackButton.scss';

export function BackButton() {
    return (
        <div className="backButtonContainer">
            <img src={LeftArrow} alt="Left Arrow" />
            <p>Back to the Market</p>
        </div>
    )
};