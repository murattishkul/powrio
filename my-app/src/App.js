import React from "react";
import Container from "./components/Container";
import Store from "./store/Store";
import BuildJson from "./components/BuildJson"

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is fucking takehome assignment </h1>
        <Container id={1} />
        <BuildJson buildJson={v=>Store.BuildJson(v)} />
      </div>
    );
  }
}

export default App;
