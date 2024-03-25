import Country from './Countries';

const CountriesList = ({countries}) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} key={country.id}/>
    })

    return (
        <>
        <h2> World Countries 😎</h2>

        <div>
            <h3>Visited Countries:</h3>
            <h4>placholder - visited countries will move here 👍🏾</h4>
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