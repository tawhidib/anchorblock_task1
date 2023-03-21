import React from "react";
import logo from "../../assets/images/logo.png";

const BrandLogo = (): JSX.Element => {
  return (
    <div className="flex items-center">
      {/* logo image  */}
      <div>
        <img src={logo.src} width={55.5} height={50} />
      </div>

      <h3 className="ml-3 text-[28px] text-[#4E5D78] font-bold">Stack</h3>
    </div>
  );
};

export default BrandLogo;
