import logo from "../logo.png";
import React, { PureComponent } from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../style/navBar.scss";
import NavActions from "./NavActions";
import NavItems from "./NavItems";

class NavBar extends PureComponent {
 

  render() {
    return (
      <nav>
        <NavItems/>
        <Link to="/products/category-all">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <NavActions />
      </nav>
    );
  }
}

const NavBarWithRouter = withRouter(NavBar);

export default NavBarWithRouter;
