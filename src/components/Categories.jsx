import React, { PureComponent } from "react";
import { GET_CATEGORIES } from "../GraphQl/Queries/getCategories";
import withQuery from "./withQuery";
import { NavLink } from "react-router-dom";

class Categories extends PureComponent {
  render() {
    const { categories } = this.props.data;
    const {active, handleShowCategories} = this.props
    return (
      <ul className={`navItems ${active}`}>
        {categories.map((category) => (
          <li key={category.name}>
            <NavLink
              onClick={() => handleShowCategories(false) }
              activeClassName="active"
              to={`/products/category-${category.name}`}
              >
              {category.name}
            </NavLink>
          </li>
        ))}
        </ul>
    );
  }
}

const CategoriesWithQuery = withQuery(Categories, GET_CATEGORIES);

export default CategoriesWithQuery;
