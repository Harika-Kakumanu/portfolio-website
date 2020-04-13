import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {CarsList} from './components/CarsList';
import {Input} from './components/todo-list/todo.js';
import {FormComponents} from './components/FormComponents/formComponents'
import CountriesDashboardApp from './components/country/CountryDashboard.js'
import CountryDetails from './components/country/countryDetails.js'

class App extends React.Component{
  state={
    selectedTheme:'Light'
  }
  onChangeTheme=()=>{
    let changeTheme=this.state.selectedTheme==='Light'?'Dark':'Light'
    this.setState({
      selectedTheme:changeTheme,
    })
  }
  

render() {
  return (
    <Router>
     <div>
        <nav>
          <ul>
          <li>
           <CarsList/>
          </li>
          <li>
            <Link to="/Input">Todo-List</Link>
          </li>
          <li>
            <Link to="/formComponents">Form Components</Link>
          </li>
          <li>
            <Link to="/country-dashboard-app">Country</Link>
          </li>
          </ul>
        </nav>

         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Input">
            <Input/>
          </Route>
          
          <Route path="/formComponents">
            <FormComponents/>
          </Route>
          
          <Route exact path="/country-dashboard-app">
            <CountriesDashboardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
          </Route>
          
        <Route exact path="/country-dashboard-app/details/:alpha3Code" >
          <CountryDetails onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}
}
export default App