import React from "react";
import countryStats from "../helpers/axioscall";

//(Matt) my thoughts are that the basic stats section should include only basic information
//Like population, currency, capital city, region.
export default function BasicStats({}) {
  //const {population, currency, capital, region, tourists} = props;
  return (
    <div>
    <p>{countryStats}</p>
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
