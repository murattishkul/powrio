import React from "react";
import Container from "./components/Container";
import Store from "./store/Store";
import BuildJson from "./components/BuildJson"
import CreateJson from "./components/CreateJson"
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='main-section'>
        <h1>POWr Take Home Task</h1>
        <Container className="app-container" id={1} />
        <BuildJson buildJson={v=>Store.buildJson(v)} />
        <CreateJson />
        <h3>Done by Murat Tishkul</h3>
      </div>
    );
  }
}

export default App;
