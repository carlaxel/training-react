import React, { Component } from 'react';
import Header from './components/Header';
import FilmCard from './components/FilmCard';
import './App.css';

class App extends Component {

  state={
    filmer: "",
    filterFilmer: "",
    value:"populatity"
  }

  componentWillMount(){
    fetch('https:javascriptst18.herokuapp.com/trending').then(response => response.json())
      .then(data => this.setState({ filmer:data }));
  }
  handleChange = (event) => {
    let filmer = [...this.state.filmer];
    if(event.target.value == "popularity"){
      filmer.sort((a,b) => {
        return a[event.target.value] - b[event.target.value]
      });
    }else{
      filmer.sort((a,b) => {
        return b[event.target.value] - a[event.target.value]
      });
    }
    this.setState({value: event.target.value, filmer: filmer});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        < Header />

          <form onSubmit={this.handleSubmit}>
            <label>
              Sortera efter:   
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="popularity">Populatitet</option>
                <option value="year">År</option>
                <option value="rating">Rating</option>
              </select>
            </label>
          <input type="submit" value="Submit" />
        </form>

        <div className ="content">

            {this.state.filmer ?
            (
            this.state.filmer.map((film) => {
              return < FilmCard  film={film} key={film.id} />
            }
          ))
            :
            (<p>loading</p>)
            }
            
        </div>

      </div>
    );
  }
}






export default App;
