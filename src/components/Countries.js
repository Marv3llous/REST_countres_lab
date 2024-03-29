const Country = ({country, onButtonClick}) => {
 const handleButtonClick = () => {
    onButtonClick(country);
 }

return (
<div className="country-design">

<h2>{country.name.common}</h2>
<h2>{country.name.official}</h2>
<p>Capital: {country.capital}</p>
<img className="flags" src={country.flags.svg} alt={`${country.name.common} flag`} />
<button onClick={handleButtonClick}> Visited </button>
</div>


)

}

export default Country;