import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class NotFound extends PureComponent {
  render() {
    return (
      <div className='notfound'>
        <h1>Not Found</h1>
        <h2>Return to <Link to="/">Home</Link></h2>
      </div>
    );
  }
}

export default NotFound;
