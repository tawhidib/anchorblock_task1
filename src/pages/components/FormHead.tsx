import React from "react";

interface FormHeadProps {
  title: string;
  subtitle: string;
}

const FormHead = ({ title, subtitle }: FormHeadProps): JSX.Element => {
  return (
    <div className="max-w-screen-sm mx-auto">
      <h4 className="text-title text-center text-[26px] font-bold mb-2">
        {title}
      </h4>
      <h5 className="text-subTitle text-center text-lg mb-2">{subtitle}</h5>
    </div>
  );
};

export default FormHead;
