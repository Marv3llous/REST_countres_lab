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
        <h2> World Countries 😎</h2>

        <div>
            <h3>Visited Countries:</h3>
            <ul>
                {mappedVisitedCountries}
            </ul>
        </div>
        <div>
            <h3>All countries:</h3>
            <ul>
                {mappedCountries}
            </ul>
           
        </div>

     
            
        </>

    )

}

export default CountriesList;