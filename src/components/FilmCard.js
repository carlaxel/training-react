import React from "react";
import Button from "./Button";

class FilmCard extends React.Component {
state={
 counter:0
}
componentDidUpdate(){

}
  componentWillMount() {

  
    
  }


 onClickHandler = () => {
    this.setState((prevState) => ({counter: prevState.counter + 1}))
  }


  render() {
  

    return (
      <div className="film-card">
        <h1>{this.props.film.title}</h1>
        <p>{this.props.film.summary}</p>
        <p>{this.props.film.year}</p>
        <p>{this.props.film.rating}</p>
        <p>{this.props.film.popularity}</p>
        <div style={{display:"flex", justifyContent:"center"}}>
        < Button text="Primary" type="primary" clickhandler={this.onClickHandler}/>
        < Button text="Danger" type="danger"/>
        < Button text="Warning" type="warning"/>
        
        </div>
        <p>Counter:{this.state.counter}</p>
      </div>
    );
  }
}

export default FilmCard;