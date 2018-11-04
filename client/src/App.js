import React from "react";
import "./App.css";
// import Item from "./Item";
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import it from "./components/Images/it.png"
import us from "./components/Images/us.png"
import kr from "./components/Images/kr.png"
import logo from "./components/Images/PF.png"
//import "./components/Images"


//how to do a reset button

class App extends React.Component {
  constructor(props) {
    super(props);

    // how to get countries without hard coding???
    this.state = {
        countries: [{
          id: 1,
          name: "Usa",
          url: us,
          economicScale: 5
        }, 
        {
          id: 2,
          name: "Italy",
          url: it,
          economicScale: 5
        }, 
      {
        id: 3,
        name: "Korea",
        url: kr,
        economicScale: 7

      },
      {
        id: 4,
        name: "Mexico",
        url: kr,
        economicScale: 7

      },
      {
        id: 5,
        name: "Afghanistan",
        url: kr,
        economicScale: 7

      },
      {
        id: 6,
        name: "Japan",
        url: kr,
        economicScale: 7

      }],



      filtered :[{
        id: 1,
        name: "Usa",
        url: us,
        economicScale: 5
      }, 
      {
        id: 2,
        name: "Italy",
        url: it,
        economicScale: 5
      }, 
    {
      id: 3,
      name: "Korea",
      url: kr,
      economicScale: 7

    },
    {
      id: 4,
      name: "Mexico",
      url: kr,
      economicScale: 7

    },
    {
      id: 5,
      name: "Afghanistan",
      url: kr,
      economicScale: 7

    },
    {
      id: 6,
      name: "Japan",
      url: kr,
      economicScale: 7

    }]
    }

    this.handleTermChange = this.handleTermChange.bind(this);

}

  handleTermChange(term) {  
      const filtered = this.state.countries.filter((country) => country.name.includes(term.charAt(0).toUpperCase() + term.substr(1).toLowerCase()))
      console.log(term.charAt(0).toUpperCase() + term.substr(1).toLowerCase())
      this.setState({
          filtered: filtered
      }) 
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
        <img src={logo} className="app-logo"
        alt = "logo" />
        <h2 class="title"> Preflict</h2>
        <h3 class="caption">A global risk assessment.</h3>
        </div>

        <SearchBar onTermChange={this.handleTermChange} />

        <CountryList countries={this.state.filtered} />
    
      </div>

    );
  }
}

export default App;
