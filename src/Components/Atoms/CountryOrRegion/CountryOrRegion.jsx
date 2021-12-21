import React from 'react';
// import BottomArrow from '../../../Images/BottomArrow.png';
import './CountryOrRegion.scss';

// API Rest Countries

let countries;

fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
    countries = countriesData;
    let options = "";
    for(let i=0; i<countries.length; i++) {
        options += `<option value="${countries[i].cca3}">${countries[i].name}</option>`;
    }
    document.getElementById("countries").innerHTML = options;
};

export function CountryOrRegion() {
    return (
        <div className="countryContainer">
            <p>Country or region</p>
            <div className="selectContainer">
                <select name="countries" id="countries"></select>
                <input type="text" placeholder='ZIP'/>
                {/* <img src={BottomArrow} alt="Arrow Bottom" /> */}
            </div>
        </div>
    )
};