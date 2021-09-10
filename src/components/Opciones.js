import React from "react";

class Opciones extends React.Component {
    render() {
      return (
        <div className="opciones">
          <div className= "opcion">
            <button id="A" className= "botones" onClick= {this.props.handleclick}>A</button>
            <h2>{this.props.opcionA}</h2>
          </div>
          <div className= "opcion">
            <button id="A" className= "botones" onClick= {this.props.handleclick}>B</button>
            <h2>{this.props.opcionB}</h2>
          </div>
          
          
        </div>
      );
    }
  }
  
  export default Opciones;