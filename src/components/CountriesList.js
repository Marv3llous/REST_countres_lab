import { useState } from 'react';
import Country from './Countries';

const CountriesList = ({countries}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleButtonClick = (country) => {
        setVisitedCountries(alreadyVisitedCountries => [...alreadyVisitedCountries, country]);
    }
    

    
    const mappedCountries = countries.map(country => {
        return <Country country={country} 
                        key={country.id}
                        onButtonClick = { () => handleButtonClick(country)}
                        />
    });

    const mappedVisitedCountries = visitedCountries.map(country => {
        return <Country country={country} 
                        key={country.id}
                        onButtonClick={ () => handleButtonClick(country)}/>
    });

    return (
        <>
        <h1 className='world-countries'> World Countries 😎</h1>
        <div className="countries-container">
        <div className='visited-countries'>
            <h2>Visited Countries:</h2>
            <ul>
                {mappedVisitedCountries}
            </ul>
        </div>
        <div className='all-countries'>
            <h2>All countries:</h2>
            <ul>
                {mappedCountries}
            </ul>
           
        </div>

        </div>
            
        </>

    )

}

export default CountriesList;