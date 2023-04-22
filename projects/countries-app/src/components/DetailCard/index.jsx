import React from 'react'
import { Link, useParams } from "react-router-dom"

//import data from "../../data/data.json"
import data from '../../services/api';

import "./style.css"


const DetailCards = data.map((country) => {
   
    return {
      name: country.name.official,
      nativeName: country.name.nativeName,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      topLevelDomain: country.topLevelDomain,
      currencies: country.currencies,
      languages: country.languages,
      flags: country.flags,
      idd: country.idd.root,
      borders: country.borders,
      numericCode: country.numericCode
    }
})

const DetailCard = () => {
    const { id } = useParams()
    const getCountry = DetailCards.filter(country => country.idd === id)[0] 
    // const getBorders = getCountry.borders == undefined ? getCountry.borders = [] : getCountry.borders 
    // const getBorderNames = getBorders == [] ? getBorders : getBorders.map((border) => {
    //     return DetailCards.filter(country => country.idd.includes(border))[0]
    // }) 
    getCountry.capital == undefined ? getCountry.capital = "-" : getCountry.capital
    getCountry.currencies == undefined ? getCountry.currencies = [] : getCountry.currencies

    // let getLanguages = []
    // const getLanguagesObj = Object.keys(getCountry.languages).forEach(country => {
    //     getLanguages.push(country);
    // });

    // <div className="grid-column">
    //                     <p>Top Level Domain: <span>{getCountry.topLevelDomain}</span></p>
    //                     {getCountry.currencies.length != 0 && <p>Currencies: <span>{getCountry.currencies[0].name}</span></p>}
    //                     <p>Idiomas: <span>{getLanguages.map(el => el.join(', '))}</span></p>
    //                 </div>  
//     <div className="borders">
//     {getBorders.length != 0 && <p className="borders-list">Fronteira: </p>}
//     {getBorders.map((border, index) => (
//         <Link border={border} key={index} to={`/${getBorders[index]}`} className="borders-country">{getBorderNames[index]}</Link>
//     ))}
// </div>
    return (
        <div className="details-container">
            <div className="details-flag-container">
                <img className="details-flag" src={getCountry.flags.svg} alt={`${getCountry.name} flag`} />
            </div>
            <div className="details-info">
                <h2 className="details-title">{getCountry.name}</h2>
                <div className="grid">
                    <div className="grid-column">
                        {/* <p>Nome Nativo: <span>{getCountry.nativeName}</span></p> */}
                        <p>População: <span>{getCountry.population.toLocaleString()}</span></p>
                        <p>Região: <span>{getCountry.region}</span></p>
                        <p>Sub Região: <span>{getCountry.subregion}</span></p>
                        <p>Capital: <span>{getCountry.capital}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailCard;