import React from "react";
import Store from "../store/Store";
import Box from "./Box";
import { observer } from "mobx-react";
import "../App.css";
class Container extends React.Component {
  render() {
    const { json } = Store;
    const childJson = json.filter(item => item.parentId === this.props.id);
    //console.log(JSON.stringify(json));

    return (
      <div className="wrap-of-container">
        {childJson.map(item => {
          if (item.type === "container") return <Container id={item.id} key={item.id}/>;
          else return <Box id={item.id} key={item.id} color={item.color || 'orange'} />;
        })}
        <div className="hoverable-buttons">
          <button className='button-add'>Add</button>
          <div className="show-buttons">
            <button onClick={() => Store.add("box", this.props.id)}>Box</button>
            <button onClick={() => Store.add("container", this.props.id)}>Container</button>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Container);
