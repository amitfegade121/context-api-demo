import React from "react";

const ErrorMessage = props => {
  const { error } = props;
  if (error) {
    switch (error.type) {
      case "required":
        return <p className="text-danger">This is required</p>;
      case "minLength":
        return (
          <p className="text-danger">
            Username should contain minimum 5 characters
          </p>
        );
      case "min":
        return <p className="text-danger">Mimimum age is 18</p>;
      case "pattern":
        return <p className="text-danger">Please enter valid email address</p>;
      default:
        return null;
    }
  }
  return null;
};

export default ErrorMessage;
