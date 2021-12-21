import React from 'react';
import { PayButton } from '../../Atoms/PayButton/PayButton';
import {PayCard} from '../../Atoms/PayCard/PayCard';
import {Email} from '../../Atoms/Email/Email';
import {CardInformation} from '../../Atoms/CardInformation/CardInformation';
import {NameOnCard} from '../../Atoms/NameOnCard/NameOnCard';
import {CountryOrRegion} from '../../Atoms/CountryOrRegion/CountryOrRegion';
import {ButtonAlternative} from '../../Atoms/ButtonAlternative/ButtonAlternative';
import { Footer } from '../../Atoms/Footer/Footer';
import './Checkout.scss';

export function Checkout() {
    return (
        <div className="checkoutContainer">
            <PayButton />
            <PayCard />
            <Email />
            <CardInformation />
            <NameOnCard />
            <CountryOrRegion />
            <ButtonAlternative />
            <Footer />
        </div>
    )
};