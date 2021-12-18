import React from 'react';
import { BackButton } from '../../Atoms/BackButton/BackButton';
import { Laptop } from '../../Atoms/Laptop/Laptop';
import { Description } from '../../Atoms/Description/Description';
import { PayButton } from '../../Atoms/PayButton/PayButton';
import './Product.scss';

export function Product() {
    return (
        <section className="productContent">
            <BackButton />
            <Laptop />

        </section>
    )
};