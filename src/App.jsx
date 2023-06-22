import { useState } from "react";

const Color = (props) => {
  return <div className={props.color}></div>
}
const App = () => {
  return (
   
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
      <div id="colors-list">
        <Color color="red"/>
        <Color color="blue" />
        <Color color="yellow" />
      </div>
        
      </div>

    </div>
  );
};

export default App;
