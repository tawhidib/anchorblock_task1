import React from "react";

interface TextWithHrLineProps {
  text: string;
}

const TextWithHrLine = ({ text }: TextWithHrLineProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <div className="flex-grow h-px bg-[#F0F5FA]"></div>

      <span className="flex-shrink text-xl text-[#B0B7C3] px-4 font-medium uppercase">
        {text}
      </span>

      <div className="flex-grow h-px bg-[#F0F5FA] "></div>
    </div>
  );
};

export default TextWithHrLine;
