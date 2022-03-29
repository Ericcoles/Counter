import React from "react";
import classes from "./Circle.css";

const Circle = (props) => {
  return (
    <div
      className={`${classes.button} ${classes[props.type]}`}
      onClick={props.click}
    >
      {props.value}
      {props.children}
    </div>
  );
};

export default Circle;
