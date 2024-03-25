import Country from './Countries';

const CountriesList = ({countries}) => {

    const mappedCountries = countries.map(country => {
        return <Country country={country} key={country.id}/>
    })

    return (
        <>
            {mappedCountries}
        </>

    )

}

export default CountriesList;