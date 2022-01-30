import React from "react";
import PropTypes from "prop-types";
import "./Button.css";
import classNames from "classnames";

const Button = ({ type, children }) => (
  <button
    className={classNames("button", {
      [`type-${type}`]: type,
    })}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
