import React from 'react'
import './countrystyle.css'
import { withRouter } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import {Header} from './Header.js';

class CountryDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            countryDetails:[],
            alpha3Code:'',
            presentCountry: {}
        }
    }
    componentDidMount=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) =>response.json())
        .then(this.getCountries)
        this.setState({presentCountry: this.props.location.state});
    }
    
    getCountries=(allCountries)=>{
        this.setState({
            countryDetails:allCountries,
        })
    }

    navigateBack=()=>{
        let {history}=this.props;
        history.goBack('/country-dashboard-app/')
    }
    
    navigateToSelectedBorderCountry=(e)=>{
        let newCountry=this.state.countryDetails.filter(eachCountry=>
            eachCountry.alpha3Code === e.target.value
        );
        this.setState({
            presentCountry:newCountry[0]
        });
    }
    
    eachBorderCountryName=(eachBorder)=>{
       let borderName= this.state.countryDetails.map(eachCountry=> {
            if(eachCountry.alpha3Code===eachBorder){
                return eachCountry.name;
            }
        });
        return borderName
    }
    
    getBorders = () => {
            const { presentCountry } = this.state;
        if(Object.keys(presentCountry).length !== 0) {
        const borders = presentCountry.borders.map(eachBorder=> {
               return <button onClick={this.navigateToSelectedBorderCountry}
                        key={eachBorder} value={eachBorder} className='borders-buttons'>
                        {this.eachBorderCountryName(eachBorder)}</button>
               });
        return borders;
        }
    }
    
    currency=()=>{
         const { presentCountry } = this.state;
        if(Object.keys(presentCountry).length!==0){
          const currenciesMethod=presentCountry.currencies.map(each=>{return each.name}).join(',')
             return currenciesMethod
        }
    }
    
    languages=()=>{
        const { presentCountry } = this.state;
        if(Object.keys(presentCountry).length!==0){
            const languages=presentCountry.languages.map(each=>{return each.name}).join(',');
            return languages;
        }
    }
    
    render(){
        const { presentCountry}=this.state;
        const{onChangeTheme,selectedTheme}=this.props;
        return(
            <div className={selectedTheme}>
            <Header  onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
            <button className='arrow-icon' onClick={this.navigateBack}><IoIosArrowRoundBack/>Back</button>
              <div className='country-details-v2'>
              
             <div>
              <img className='imagev2' src={presentCountry.flag} alt=''/>
             </div>
          
            <div className='middle-div-v2'>
              <h2>{presentCountry.name}</h2>
              <p>Native Name:{presentCountry.nativeName}</p>
              <p>Population:{presentCountry.population}</p>
              <p>Region:{presentCountry.region}</p>
              <p>Sub Region:{presentCountry.subregion}</p>
              <p>Capital:{presentCountry.capital}</p>
              <p>Border Countries:{this.getBorders()}</p>               

            </div>

            <div className='domain-currency-languages'>
              <p>Top Level Domain:{presentCountry.topLevelDomain}</p>
              <p>Curriences:{this.currency()}</p>
              <p>Languages:{this.languages()}</p>
            </div>
             </div>
            </div>
        );
    }
}
export default withRouter (CountryDetails);