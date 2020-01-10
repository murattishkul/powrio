import React from "react";
import Store from "../store/Store";
import Box from "./Box";
import { observer } from "mobx-react";

class Container extends React.Component {
  render() {
    const { json } = Store;
    const childJson = json.filter(item => item.parentId === this.props.id);
    console.log(JSON.stringify(json));

    return (
      <div style={{ border: "solid", width: "50%", height: "50%"}}>
        {childJson.map(item => {
          if (item.type === "container") return<Container id={item.id} key={item.id} />;
          else return <Box id={item.id} key={item.id}/>;
        })}
        <button onClick={() => Store.add("box", this.props.id)}>Box</button>
        <button onClick={() => Store.add("container", this.props.id)}>
          Container
        </button>
      </div>
    );
  }
}

export default observer(Container);
