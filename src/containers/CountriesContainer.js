import { useEffect, useState } from "react"
import CountriesList from "../components/CountriesList";

const CountriesContainer = () =>{
    const [countries, setCountries] = useState([]);
    

const loadCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    setCountries(jsonData);
}

useEffect(
    () => {
        loadCountries();
    }, []
);

useEffect(
    () => {
        console.log(`countries: ${countries}`);
    }, [countries]
);

return (
    <>
    <CountriesList countries={countries} />
    </>
);


}

export default CountriesContainer;