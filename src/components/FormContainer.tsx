import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer = ({ children }: FormContainerProps): JSX.Element => {
  return <div className="max-w-[576px] mx-auto px-4">{children}</div>;
};

export default FormContainer;
