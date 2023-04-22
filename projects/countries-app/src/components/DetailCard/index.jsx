import React from 'react'
import { Link, useParams } from "react-router-dom"

import data from "../../data/data.json"

import "./style.css"

const DetailCards = data.map((country) => {
    const { name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, flags, alpha3Code, borders, numericCode } = country
    return {
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      flags,
      alpha3Code,
      borders,
      numericCode
    }
})

const DetailCard = () => {

    const { id } = useParams()

    const getCountry = DetailCards.filter(country => country.alpha3Code === id)[0] //returns whole obj with props
    
    const getBorders = getCountry.borders == undefined ? getCountry.borders = [] : getCountry.borders //returns array with border codes


    const getBorderNames = getBorders == [] ? getBorders : getBorders.map((border) => {
        return DetailCards.filter(country => country.alpha3Code.includes(border))[0].name
    }) 

    console.log(getBorderNames);

    getCountry.capital == undefined ? getCountry.capital = "-" : getCountry.capital

    getCountry.currencies == undefined ? getCountry.currencies = [] : getCountry.currencies

    const getLanguages = getCountry.languages.map(country => country.name)

    return (
        <div className="details-container">
            <div className="details-flag-container">
                <img className="details-flag" src={getCountry.flags.svg} alt={`${getCountry.name} flag`} />
            </div>
            <div className="details-info">
                <h2 className="details-title">{getCountry.name}</h2>
                <div className="grid">
                    <div className="grid-column">
                        <p>Nome Nativo: <span>{getCountry.nativeName}</span></p>
                        <p>População: <span>{getCountry.population.toLocaleString()}</span></p>
                        <p>Região: <span>{getCountry.region}</span></p>
                        <p>Sub Região: <span>{getCountry.subregion}</span></p>
                        <p>Capital: <span>{getCountry.capital}</span></p>
                    </div>
                    <div className="grid-column">
                        <p>Top Level Domain: <span>{getCountry.topLevelDomain}</span></p>
                        {getCountry.currencies.length != 0 && <p>Currencies: <span>{getCountry.currencies[0].name}</span></p>}
                        <p>Idiomas: <span>{getLanguages.join(", ")}</span></p>
                    </div>  
                </div>
                <div className="borders">
                    {getBorders.length != 0 && <p className="borders-list">Fronteira: </p>}
                    {getBorders.map((border, index) => (
                        <Link border={border} key={index} to={`/${getBorders[index]}`} className="borders-country">{getBorderNames[index]}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailCard;