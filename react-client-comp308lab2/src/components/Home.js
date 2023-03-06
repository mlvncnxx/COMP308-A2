//import { withRouter } from "react-router-dom";

import React from "react";
import Banner from "../images/Welcome.jpg";

function Home(props) {
  return (
    <div className="container">
      <div className="span12 div-style">
        <h2 className="h2-style" align="center"> Student Course Registration System</h2>
        <p className="p-style" align="center">
          React front-end calls Express REST API to add, list, update, or delete
          a user, create a course etc.
        </p>
      </div>
    </div>
  );
}

export default Home;
