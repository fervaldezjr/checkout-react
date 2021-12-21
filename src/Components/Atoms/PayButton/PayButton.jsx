/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ApplePay from '../../../Images/ApplePay.png';
import './PayButton.scss';

export function PayButton() {
    return (
        <div className="buttonContainer">
            <a href="#">
                <img src={ApplePay} alt="Apple Pay" />
            </a>
        </div>
    )
};