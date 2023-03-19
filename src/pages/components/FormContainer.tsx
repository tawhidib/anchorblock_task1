import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer = ({ children }: FormContainerProps): JSX.Element => {
  return <div className="max-w-screen-sm mx-auto px-12">{children}</div>;
};

export default FormContainer;
