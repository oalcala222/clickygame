import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-warning bg-warning">
      <span className="navbar-brand mb-0 h1 text-center">{props.children}</span>
    </nav>
  );
}
export default Nav;