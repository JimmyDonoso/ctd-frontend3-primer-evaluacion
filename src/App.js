import React from "react";
import Opciones from "./components/Opciones";
import Historial from "./components/Historial";
import data from "./components/data.json";

const historial = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
        contador: 0,
        anterior: "",
        //historial: []
        //array del historial y contador actual
    };
  }

  componentDidUpdate(){
    //pushear al historial
      historial.push(this.state.anterior);
  }

  handleclick = (e) =>{
    const id = e.target.id;
    if(this.state.contador >= 7) {
      alert("Game Over")
    }else if(id === "A" && this.state.anterior !== "A"){
      this.setState({
        contador: this.state.contador + 1,
        anterior: "A",
      });//
    }else if (id === "A" && this.state.anterior === "A") {
      this.setState({
        contador: this.state.contador + 2,
      });
    }else if (id === "B" && this.state.anterior === "A") {
      this.setState({
        contador: this.state.contador + 3,
        anterior: "B",
      });
    }else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        anterior: "B",
      });
    }

  }

    //render app
    render() {
      return(
        <div className="App">
            <div class="layout">
              <h1 class= "historia">{data[this.state.contador].historia}</h1>

            <Opciones 
              handleclick={this.handleclick}
              opcionA={data[this.state.contador].opciones.a}
              opcionB={data[this.state.contador].opciones.b}
            />

            <Historial 
              anterior={this.state.anterior}
              historial={historial.map((e, index) => (
                <li key={index}>{e}</li>)
              )}
            />
            </div>
        </div>
      );
  }
  
}
 

export default App;
