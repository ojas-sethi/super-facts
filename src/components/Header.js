import React, { Fragment } from "react";
import "../style.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="65" width="65" alt="Logo" />
          <h1>{props.title}</h1>
        </div>
        <button onClick={props.onShareClick} className="btn btn-large btn-open">
          {props.buttonTitle}
        </button>
      </header>
    </Fragment>
  );
};

export default Header;
