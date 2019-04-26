import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import store from "./Store";
import Navbar from './Components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        
          <Fragment>
            <Navbar/>
          </Fragment>
      </Provider>
    );
  }
}
export default App;
