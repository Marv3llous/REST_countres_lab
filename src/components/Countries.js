const Country = ({country, onButtonClick}) => {
    const handleButtonClick = () => {
        onButtonClick(country);
    }

return (
<>
<h2>{country.name.common}</h2>
<h2>{country.name.official}</h2>
<p>Capital: {country.capital}</p>
<p>Flag: {country.flag}</p>
<button onClick={{handleButtonClick}}>Visited</button>
</>


)

}

export default Country;