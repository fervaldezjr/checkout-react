import React from 'react';
import { Product } from '../Molecules/Product/Product';
import { Checkout } from '../Molecules/Checkout/Checkout';

import './Main.scss';

export function Main() {
    return (
        <main>
            <section className="productContainer">
                <Product />
            </section>
            <section className="checkoutContainer">
                <Checkout />
            </section>
        </main>
    )
};