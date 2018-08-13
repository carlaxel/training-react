import React from "react";

class Button extends React.Component {
  componentWillMount() {
    
  }
 
  
  render() {
    let compiledClasses = `btn btn-${this.props.type}`
    return (
      <button className={compiledClasses} style={{margin: "0 5px"}} onClick={this.props.clickhandler}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;