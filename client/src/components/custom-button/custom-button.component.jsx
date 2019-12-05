import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  more,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } ${more ? "more" : ""} custom-button , hvr-sweep-to-left `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
