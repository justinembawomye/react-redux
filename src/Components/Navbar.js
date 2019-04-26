import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import React, { Component, Fragment } from "react";
import Posts from "../Components/Posts";
import PostForm from "../Components/PostForm";

class Navbar extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <nav className="navbar navbar-default navbar-static-top right">
            <ul className="nav nav-pills right">
              <li>
                <Link to="/" className="active">
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/add-post" className="active">
                  Add post
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/" component={Posts} exact />
            <Route path="/add-post" component={PostForm} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
export default Navbar;
