import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Posts  from "./Components/Posts";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div>Hello {this.props.name}</div>
        <Posts />
      </Fragment>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Justine" />, mountNode);
