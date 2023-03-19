import React from "react";
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

      {/* // hr line with text */}

      <TextWithHrLine text="Or" />
    </FormContainer>
  );
};

export default SignIn;
