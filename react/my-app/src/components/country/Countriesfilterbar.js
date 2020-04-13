import React from 'react'
import {SelectRegion} from './searchRegion.js';
import {SelectCountry} from './searchCountry.js';


class CountriesFilterBar extends React.Component{
  render(){
       // console.log(`filterboard ${this.props.regionOptions}`)
        return(
            <div className='filter-bar'>
            <SelectCountry  filterCountriesBySearchText={this.props.filterCountriesBySearchText} selectedTheme='' />
            <SelectRegion  filterCountriesBySelectedRegion={this.props.filterCountriesBySelectedRegion} 
            regionOptions={this.props.regionOptions}  selectedTheme=''/>
            </div>
            )
    }
}

export{CountriesFilterBar}

