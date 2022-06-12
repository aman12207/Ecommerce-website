import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="ui fixed menu">
        <div className="ui container center">
      <Link to='/' className="nav-heading">
          <h2>FakeShop</h2>
      </Link>
        </div>
    </div>
  );
};

export default Navbar;
