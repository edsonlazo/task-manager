import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Heading.css";

const Heading = ({ children, color, size }) => (
  <heading
    className={classNames("heading", {
      [`color-${color}`]: color,
      [`size-${size}`]: size,
    })}
  >
    {children}
  </heading>
);
Heading.defaultProps = {
  color: "default",
  size: "md",
};

export default Heading;
