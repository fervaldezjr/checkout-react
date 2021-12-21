/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Redsys from '../../../Images/Redsys.png';
import './Footer.scss';

export function Footer() {
    return (
        <footer>
            <p>Powered by <img src={Redsys} alt="Redsys" /></p>
            <div className="footerLinks">
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
            </div>
        </footer>
    )
};