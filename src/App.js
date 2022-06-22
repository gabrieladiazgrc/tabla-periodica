import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import PeriodicTable from "./PeriodicTable";

function App() {
  return (
    <div className="App">   
      <h1>Tabla Periódica de los Elementos</h1>
      <PeriodicTable/>
    </div>
  );
}

export default App;