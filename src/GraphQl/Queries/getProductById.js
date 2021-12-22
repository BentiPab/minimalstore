import { gql } from "@apollo/react-components";

export const GET_PRODUCT_BY_ID = gql`
  query getProductById($id: String!) {
    product(id: $id) {
      name
      id
      brand
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency
        amount
      }
    }
  }
`;
