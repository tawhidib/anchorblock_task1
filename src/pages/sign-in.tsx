import React from "react";
import AuthActionButtons from "./components/AuthActionButtons";
import FormContainer from "./components/FormContainer";
import FormHead from "./components/FormHead";
import TextWithHrLine from "./components/TextWithHrLine";

const SignIn = (): JSX.Element => {
  return (
    <FormContainer>
      <FormHead
        title={"Sign In"}
        subtitle={"Welcome back, you’ve been missed!"}
      />

      {/* auth action buttons  */}
      <AuthActionButtons pageName="Sign In" />

      {/* // hr line with text */}

      <TextWithHrLine text="Or" />

      <button
        className="w-full py-4 bg-blue capitalize text-white rounded-2xl outline-none  
      hover:shadow-lg"
      >
        sign in
      </button>
      <p className="mt-8 text-placeholder text-center">
        Don’t have an account yet?{" "}
        <button className="capitalize text-blue">sign up</button>
      </p>
    </FormContainer>
  );
};

export default SignIn;
