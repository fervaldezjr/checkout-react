import React from 'react';
import Discover from '../../../Images/Discover.png';
import American from '../../../Images/AmericanExpress.png';
import Visa from '../../../Images/Visa.png';
import Mastercard from '../../../Images/Mastercard.png';
import CVC from '../../../Images/CVCard.png';
import './CardInformation.scss';

export function CardInformation() {
    return (
        <div className='containerTriple'>
            <div className="cardContainer">
                <p>Card Information</p>
                <input type="text" maxlength="19" autocomplete="off" placeholder="1234 1234 1234 1234" name="cardInformation" id="cardInformation" required />
                <div className="brandCard">
                    <img src={Visa} alt="Visa logo" />
                    <img src={Mastercard} alt="Mastercard logo" />
                    <img src={American} alt="American Express logo" />
                    <img src={Discover} alt="Discover logo" />
                </div>
            </div>
            <div className="ccvContainer">
                <input type="text" maxlength="5" placeholder="MM / YY" name="cardInformation" id="cardExpiration" required />
                <input type="text" placeholder="CVC" name="password" id="cardPassword" maxlength="3" required />
                <img src={CVC} alt="CVC" />
            </div>
        </div>
    )
};