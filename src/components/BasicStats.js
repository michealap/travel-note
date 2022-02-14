import React from "react";
import axioscall from "../helpers/axioscall";
//import currencyStats from "../helpers/axioscall";
//console.log("Axioscall Canada", axioscall("Canada"));

//(Matt) my thoughts are that the basic stats section should include only basic information
//Like population, currency, capital city, region.
export default function BasicStats({ countryStats }) {
  console.log("Country stats", countryStats);
  if(!countryStats) {
    return <></>;
  }
  return (
    <div>
      <p>{countryStats.name}'s capital city is {countryStats.capital}</p>
      <p>And can be found in {countryStats.region}</p>
      <p>{countryStats.name}'s has a population of: {countryStats.population}</p>
      
      <p>Which has a conversion of 1USD to </p>
      <p>It also has a tourist population of {countryStats.tourists}</p>
    </div>
  )
}

// export default class FetchCountryData extends React.Component {
//   state = {
//     loading: true,
//     countryData: null
//   }
//   async componentDidMount() {
//     const country = axioscall();
//     // const data = country.json();
//     // console.log(data);
//     this.setState({countryData: country, loading: false});

//   }
//   render() {
//     if (this.state.loading) {
//       return <div>Loading...</div>;
//     }
//     if (!this.state.countryData) {
//       return <div>No country data</div>;
//     }
//     return (
//     <div>
//       <div>{this.state.countryData}</div>
//      </div>
//         )
//   }
// }
