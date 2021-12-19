import React from 'react';
import './Email.scss';

export function Email() {
    return (
        <div className="emailContainer">
            <p>Email</p>
            <input type="text" name="email" id="email" required />
        </div>
    )
};