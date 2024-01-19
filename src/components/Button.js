import React from 'react';
import PropTypes from 'prop-types';
import * as propTypes from 'prop-types';
export const Button = (props) => {
  return (
    <button className={props.size} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string.isRequired,
  size: propTypes.oneOf(['small', 'medium', 'large']),
  onClick: propTypes.func
};

Button.defaultProps = {
  children: "Click medium's button",
  size: 'medium'
};
