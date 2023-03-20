import React from "react";
import googleIcon from "../../assets/images/icons/google.png";
import appleIcon from "../../assets/images/icons/apple.png";
interface AuthActionButtonsProps {
  pageName: string;
}

const AuthActionButtons = ({
  pageName,
}: AuthActionButtonsProps): JSX.Element => {
  return (
    <div className="my-6 flex gap-x-4">
      <div className="flex-1">
        <button className="w-full bg-[#F0F5FA] rounded-lg text-center py-3">
          <div className="flex justify-center items-center">
            <img src={googleIcon.src} width={25} height={25} />
            <span className="ml-2 text-subTitle">{pageName} with Google</span>
          </div>
        </button>
      </div>
      <div className="flex-1">
        <button className="w-full bg-[#F0F5FA] rounded-lg text-center py-3">
          <div className="flex justify-center items-center">
            <img src={appleIcon.src} width={25} height={25} />
            <span className="ml-2 text-subTitle">{pageName} with Apple ID</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AuthActionButtons;
