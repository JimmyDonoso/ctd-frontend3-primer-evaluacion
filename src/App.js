import React from "react";
import Opciones from "./components/Opciones";
import Historial from "./components/Historial";
//import data from "./data.json"


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        //array del historial y contador actual
    };
  }

    //componentDidMount

    //handleclick

    //render app
    render() {
      return(
        <div className="App">
          <p>Estructura de la app</p>
          <Opciones />
          <Historial />
        </div>
      );
  }
  
}
 

export default App;
