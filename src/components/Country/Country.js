import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: '100px'}
    const countryStyle = {border: '2px solid red', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is a {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>population: {population}</p>
            <p><small>region: {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;