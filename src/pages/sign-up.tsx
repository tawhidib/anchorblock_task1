import React from "react";
import AuthActionButtons from "./components/AuthActionButtons";
import FormContainer from "./components/FormContainer";
import FormHead from "./components/FormHead";
import TextWithHrLine from "./components/TextWithHrLine";
import { useFormik } from "formik";
import at from "../assets/images/icons/at.png";
import face from "../assets/images/icons/face.png";
import locker from "../assets/images/icons/locker.png";
import eye from "../assets/images/icons/eye.png";

interface signUpFormData {
  email: string;
  name: string;
  password: string;
  checked: boolean;
}

const SignUp = () => {
  const initialValues: signUpFormData = {
    email: "",
    name: "",
    password: "",
    checked: false,
  };

  const signUpFormik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormContainer>
      <FormHead
        title="Getting Started"
        subtitle="Create an account to continue!"
      />

      {/* auth action buttons  */}
      <AuthActionButtons pageName="Sign Up" />

      <TextWithHrLine text="or" />

      <form className="mt-6">
        {/* email field  */}
        <div className="mb-7">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={at.src} height={22} width={22} />
            </div>
            <input
              type="email"
              className="block w-full p-4 pl-12 text-base text-placeholder border border-[#EDEFF1] rounded-2xl font-medium focus:outline-transparent"
              placeholder="Your Email"
              value={signUpFormik.values.email}
              name="email"
              onChange={signUpFormik.handleChange}
              required
            />
          </div>
        </div>

        {/* name field  */}
        <div className="mb-7">
          <div className="relative py-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={face.src} height={22} width={22} />
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-12 text-base text-placeholder border border-[#EDEFF1] rounded-2xl font-medium focus:outline-transparent"
              placeholder="Your Name"
              value={signUpFormik.values.name}
              name="name"
              onChange={signUpFormik.handleChange}
              required
            />
          </div>
        </div>

        {/* password field  */}
        <div className="mb-7">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={locker.src} height={22} width={22} />
            </div>
            <input
              type="password"
              className="block w-full p-4 pl-12 text-base text-placeholder border border-[#EDEFF1] rounded-2xl font-medium focus:outline-transparent"
              placeholder="Create Password"
              value={signUpFormik.values.password}
              name="password"
              onChange={signUpFormik.handleChange}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-4"
            >
              <img src={eye.src} height={20} width={20} />
            </button>
          </div>
        </div>

        {/* checkbox  */}
        <div className="flex items-center mb-4">
          <input
            id="sign-up-checkbox"
            type="checkbox"
            value={`${signUpFormik.values.checked}`}
            onChange={signUpFormik.handleBlur}
            className="bg-placeholder cursor-pointer 
            w-[28px] h-[28px] border-none rounded-lg checked:bg-blue outline-none checked:outline-none border-transparent focus:border-transparent focus:ring-transparent"
          />
          <label
            htmlFor="sign-up-checkbox"
            className="ml-4 my-3 text-placeholder"
          >
            I agree to the Terms & Conditions
          </label>
        </div>
      </form>

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
