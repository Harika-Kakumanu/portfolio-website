import React from 'react'
import {Header} from './Header.js';
import {CountriesFilterBar} from './Countriesfilterbar.js';
import {Countries} from './countries.js';
import './countrystyle.css'

class CountriesDashboardApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
        countries:[],
        selectedTheme:'Light',
        searchText:'',
        selectedRegion:'All',
        filterCountries:[],
        notFound:false,
        }
    }
    
    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response) =>response.json())
        .then(this.getCountries)
    }
    
    getCountries=(allCountries)=>{
        this.setState({
            countries:allCountries,
            filterCountries:allCountries,
            })
    }
    
    getRegionOptions=()=>{
        const regions=['All','Africa','Americas','Asia','Europe','Oceania']
        let temp= regions.map(eachRegion=>
              <option key={eachRegion} value={eachRegion}>{eachRegion}</option>
        )
      return temp;
    }
    
    filterCountriesBySelectedRegion=(Region)=>{
        if(Region==='All'){
            this.setState(
               {filterCountries:this.state.countries,
                   selectedRegion:'All',
               })
        }
        else{
            let selectedCountriesRegion=this.state.countries.filter(eachCountry=>{
              return  eachCountry.region.includes(Region);
            })
            this.setState({
                filterCountries:selectedCountriesRegion,
                selectedRegion:Region
            })
        }
    }

    filterCountriesBySearchText=(searchText=>{
       const{selectedRegion}=this.state;
        searchText=searchText.charAt(0).toUpperCase()+searchText.slice(1).toLowerCase();
        
        if(this.state.selectedRegion==='All'){
            let selectedCountriesbyText=this.state.countries.filter(eachCountry=>{
                return eachCountry.name.includes(searchText);
            })
            this.setState({
                filterCountries:selectedCountriesbyText
                },this.notFound)
        }
        else{
            
            let selectedCountriesbyText=this.state.countries.filter(eachCountry=>{
             return eachCountry.name.includes(searchText) && eachCountry.region===selectedRegion
        })
        
        this.setState({
                filterCountries:selectedCountriesbyText},
                this.notFound
            )
    }
    }
        )
        
        notFound=()=>{
            if(this.state.filterCountries.length===0){
                this.setState({
                    notFound:true,
                })
            }
            else{
                this.setState({
                    notFound:false,
                })
            }

        }
        
      render(){
        const{filterCountries}=this.state
        const{onChangeTheme,selectedTheme}=this.props
        return(
            <div className={selectedTheme}>
            <Header onChangeTheme={onChangeTheme} selectedTheme={selectedTheme}/>
            <CountriesFilterBar regionOptions={this.getRegionOptions()} 
            filterCountriesBySearchText={this.filterCountriesBySearchText}
            filterCountriesBySelectedRegion={this.filterCountriesBySelectedRegion} />
            {this.state.notFound?<p className='not-found'>Country Not Found</p>:''}
              <Countries countries={filterCountries}/>
            </div>
            )}
}
export default CountriesDashboardApp;