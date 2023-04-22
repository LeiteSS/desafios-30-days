import React from "react"
import { Link } from "react-router-dom"
//import dataJson from "../../data/data.json"

import data from '../../services/api';

import "./style.css"

export const HomeCards = data.map((country) => {
    return {
        name: country.name.official,
        population: country.population,
        region: country.region,
        capital: country.capital,
        flags: country.flags,
        idd: country.idd.root
    }
})

const Card = ({ country }) => {
    country.capital == undefined ? country.capital = "-" : country.capital

    return (
        <div className="card">
            <div className="card-flag-container">
                <Link to={country.idd}><img className="card-flag" src={country.flags.svg} alt="Country flag" /></Link>
            </div>
            <div className="card-info">
                <h2>{country.name}</h2>
                <p>População: <span>{country.population.toLocaleString()}</span></p>
                <p>Região: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>  
            </div>
        </div>
    )
}

export default Card