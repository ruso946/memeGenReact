import React from "react"  ;
import './App.css';
import Dropdown from "./componentes/Dropdown";
import Textos from "./componentes/Textos";
import Eleccion from "./componentes/Eleccion";

function App() {

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-2">
          <Dropdown/>
        </div>
        <div className="col-md-3">
          <Textos/>
        </div>
        <div className="col-md-7">
          <Eleccion/>          
        </div>
      </div>      
    </div>


  );
}

export default App;
