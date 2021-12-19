import React from 'react';
import {PayCard} from '../../Atoms/PayCard/PayCard';
import {Email} from '../../Atoms/Email/Email';
import {CardInformation} from '../../Atoms/CardInformation/CardInformation';
import {NameOnCard} from '../../Atoms/NameOnCard/NameOnCard';
import {CountryOrRegion} from '../../Atoms/CountryOrRegion/CountryOrRegion';
import {PayButton} from '../../Atoms/PayButton/PayButton';
import './Checkout.scss';

export function Checkout() {
    return (
        <div className="checkoutContainer">
            <PayCard />
            <Email />
            <CardInformation />
            <NameOnCard />
            {/* <CountryOrRegion />
            <PayButton /> */}
        </div>
    )
};