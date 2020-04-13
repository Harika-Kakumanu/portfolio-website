import React from 'react';
import {GoSearch} from "react-icons/go";

class SelectCountry extends React.Component{

submit=(event)=>{
    this.props.filterCountriesBySearchText(event.target.value)
}
  render(){
      return (
          <div className='search-div' onChange={this.submit} >
              <span className='search-icon'><GoSearch/></span>
             <input className='in-searchCountry' type='text' placeholder='Search for a country '/>
          </div>
          )
  }
  

}
export{SelectCountry}