import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from "./Store";
import "./styles.css";
import Posts  from "./Components/Posts";
import PostForm from "./Components/PostForm";


class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
      <Fragment>
        <div>Hello {this.props.name}</div>
        <PostForm/>
        <hr/>
        <Posts />
      </Fragment>
      </Provider>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Justine" />, mountNode);
