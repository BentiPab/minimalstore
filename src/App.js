import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import React, { Component } from "react";
import NotFound from "./components/NotFound";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { overlay } = this.props;
    return (
      <Router>
        <header>
          <NavBar />
        </header>
        <div className={`content ${overlay ? "overlay-active" : ""}`}>
          <Switch>
            <Route path="/products/category-:category">
              <CategoryPage />
            </Route>
            <Route path="/products/:category/:id">
              <ProductPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/not-found">
              <NotFound />
            </Route>
            <Redirect from="/" to="/products/category-all" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  overlay: state.overlay,
});

export default connect(mapStateToProps)(App);
