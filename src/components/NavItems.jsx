import React, { PureComponent } from "react";
import CategoriesWithQuery from "./Categories";


class NavItems extends PureComponent {
  state = {
    showCategories: false,
  };

  handleShowCategories = (state) => {
    this.setState({ showCategories: state });
  };
  
  render() {
    const { showCategories } = this.state;
    return (
      <div>
        <div
          className={`burger ${showCategories ? "burger-active" : ""}`}
          onClick={() => this.handleShowCategories(!showCategories)}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
     
        <CategoriesWithQuery
          handleShowCategories={this.handleShowCategories}
          active={` ${showCategories ? "navbar-active" : ""}`}
        />
      </div>
    );
  }
}





export default NavItems
