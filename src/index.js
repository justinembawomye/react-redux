import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Posts  from "./Components/Posts";
import PostForm from "./Components/PostForm";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div>Hello {this.props.name}</div>
        <PostForm/>
        <hr/>
        <Posts />
      </Fragment>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Justine" />, mountNode);
