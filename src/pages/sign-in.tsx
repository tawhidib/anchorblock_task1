import React from "react";
import AuthActionButtons from "./components/AuthActionButtons";
import FormContainer from "./components/FormContainer";
import FormHead from "./components/FormHead";
import TextWithHrLine from "./components/TextWithHrLine";
import { useFormik } from "formik";
import at from "../assets/images/icons/at.png";
import locker from "../assets/images/icons/locker.png";
import eye from "../assets/images/icons/eye.png";

interface SignInFormData {
  email: string;
  password: string;
  checked: boolean;
}

const validate = (values: SignInFormData) => {
  const errors: SignInFormData = {
    email: "",
    password: "",
    checked: false,
  };

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email";
  }

  return errors;
};

const SignIn = (): JSX.Element => {
  const initialValues: SignInFormData = {
    email: "",
    password: "",
    checked: false,
  };

  const signInFormik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
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

      {/* form  */}

      <form onSubmit={signInFormik.handleSubmit} autoComplete={"off"}>
        {/* email field  */}
        <div className="relative py-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={at.src} height={22} width={22} />
          </div>
          <input
            type="email"
            className="block w-full p-4 pl-12 text-base text-placeholder border border-[#EDEFF1] rounded-2xl font-medium focus:outline-transparent"
            placeholder="Your Email"
            value={signInFormik.values.email}
            name="email"
            onChange={signInFormik.handleChange}
            required
          />
        </div>

        {/* password field  */}
        <div className="relative py-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={locker.src} height={22} width={22} />
          </div>
          <input
            type="password"
            className="block w-full p-4 pl-12 text-base text-placeholder border border-[#EDEFF1] rounded-2xl font-medium focus:outline-transparent"
            placeholder="Create Password"
            value={signInFormik.values.password}
            name="password"
            onChange={signInFormik.handleChange}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-4"
          >
            <img src={eye.src} height={20} width={20} />
          </button>
        </div>

        {/* checkbox  */}
        <div className="flex items-center mb-4">
          <input
            id="checked"
            type="checkbox"
            name="checked"
            checked={signInFormik.values.checked}
            // value={`${signInFormik.values.checked}`}
            onChange={signInFormik.handleChange}
            className="bg-placeholder cursor-pointer 
            w-[28px] h-[28px] border-none rounded-lg checked:bg-blue outline-none checked:outline-none border-transparent focus:border-transparent focus:ring-transparent"
          />
          <label htmlFor="checked" className="ml-4 my-3 text-placeholder">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-blue capitalize text-white rounded-2xl outline-none  
      hover:shadow-lg"
        >
          sign in
        </button>
      </form>
      <p className="mt-8 text-placeholder text-center">
        Don’t have an account yet?{" "}
        <button className="capitalize text-blue">sign up</button>
      </p>
    </FormContainer>
  );
};

export default SignIn;
