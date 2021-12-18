import React from 'react';
import LaptopPhone from '../../../Images/LaptopPhone.png';
import LaptopDesktop from '../../../Images/LaptopDesktop.png';
import './Laptop.scss';

export function Laptop() {
    return (
        <div className="laptopContainer">
            <div className="laptopDesktop">
                <img src={LaptopDesktop} alt="Laptop Desktop" />
            </div>
            <div className="laptopPhone">
                <img src={LaptopPhone} alt="Laptop Phone" />
            </div>
        </div>
    )
};