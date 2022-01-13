import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title text-light">{props.children}</h1>;
}

export default Title;
