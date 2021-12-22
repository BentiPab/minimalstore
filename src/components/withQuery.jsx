import { Query } from "@apollo/react-components";
import client from "../GraphQl/client";
import { PureComponent } from "react";

export default function withQuery(Component, query) {
  return class WithQuery extends PureComponent {
    render() {
      return (
        <Query query={query} client={client}>
          {({ loading, data, error }) => {
            if (loading) {
              return null;
            }

            if (error) {
              return <p>error</p>;
            }

            if (data) {
              return (
                <div>
                  <Component {...this.props} data={data} />
                </div>
              );
            }
          }}
        </Query>
      );
    }
  };
}
