import React from "react";
import './header.css';

function Header(props) {
  return (
    <header className="header text-center">
      <img src= "images/logo.png" alt= "" />
      <img src= "images/bartslingshot.png" alt= "" />
      <h1>Ay Caramba!
        <br></br>
        <span className="score">Current Score:
        <br>
        </br>Highest Score so far:
        </span>
      </h1>
      <h4>Click on an image to gain some points, but don't click on any more than once!</h4>
    </header>
  );
}
export default Header;