import React from "react";
import AuthActionButtons from "./components/AuthActionButtons";
import FormContainer from "./components/FormContainer";
import FormHead from "./components/FormHead";
import TextWithHrLine from "./components/TextWithHrLine";

const SignUp = () => {
  return (
    <FormContainer>
      <FormHead
        title="Getting Started"
        subtitle="Create an account to continue!"
      />

      {/* auth action buttons  */}
      <AuthActionButtons pageName="Sign Up" />

      <TextWithHrLine text="or" />

      <button
        className="w-full py-4 bg-blue capitalize text-white rounded-2xl outline-none  
      hover:shadow-lg"
      >
        sign up
      </button>
      <p className="mt-8 text-placeholder text-center">
        Already have an account?{" "}
        <button className="capitalize text-blue">sign in</button>
      </p>
    </FormContainer>
  );
};

export default SignUp;
