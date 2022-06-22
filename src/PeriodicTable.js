import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import "./PeriodicTable.css";
import data from "./PeriodicTableJSON.json";

const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    "lanthanide": "#4AABAF",
    "metalloid": "#73D2DE",
};



const PeriodicTable = () => {
    return (
      <div className="periodic-table">
        {data.elements.map((element) => (
          <a 
            draggable="true"
            href={element.source}
            className="element"
            key={element.name}
            style={{
              gridRow: element.ypos,
              gridColumn: element.xpos,
              borderColor: colorMap[element.category],
            }}
          >
            <strong>{element.symbol}</strong>
            <small className="number">{element.number}</small>
            <small className="name">{element.name}</small>
            <small className="atomic-mass">{element.atomic_mass}</small>
          </a>
        ))}
      </div>
    );
};

export default PeriodicTable;