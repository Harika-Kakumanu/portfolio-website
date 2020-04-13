import React from 'react'
import './countrystyle.css'
import { withRouter } from "react-router-dom";
class CountryCard extends React.Component{

    navigateToCountryDetailsPage=()=>{
      let {history}=this.props
      history.push(`/country-dashboard-app/details/${this.props.countryDetails.alpha3Code}`,this.props.countryDetails)

    }
    
    render(){
        
        const {countryDetails}=this.props
        return(
     <div className='country-card' onClick={this.navigateToCountryDetailsPage}>
          <img src={countryDetails.flag} alt='' className='image'/>
           <div className='country-details'>
           <p className='country-name'>{countryDetails.name}</p>
            <p>Population:{countryDetails.population}</p>
            <p>Region:{countryDetails.region}</p>
            <p>Capital:{countryDetails.capital}</p>
          </div>
      </div>
            )
    }
}
export default withRouter (CountryCard)