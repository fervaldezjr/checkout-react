import React from 'react';
import { BackButton } from '../../Atoms/BackButton/BackButton';
import { Laptop } from '../../Atoms/Laptop/Laptop';
import { Description } from '../../Atoms/Description/Description';
import './Product.scss';

export function Product() {
    return (
        <section className="productContent">
            <BackButton />
            <div className="productoReverse">
                <Laptop />
                <Description />
            </div>
        </section>
    )
};