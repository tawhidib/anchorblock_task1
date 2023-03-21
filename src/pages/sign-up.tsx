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
import * as Yup from "yup";
import Navbar from "./components/Navbar";

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
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address.")
        .required("Please provide an email"),
      name: Yup.string().required("Please give your name"),
      password: Yup.string().min(5).required(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, touched } = signUpFormik;

  return (
    <>
      <Navbar />

      <FormContainer>
        <FormHead
          title="Getting Started"
          subtitle="Create an account to continue!"
        />

        {/* auth action buttons  */}
        <AuthActionButtons pageName="Sign Up" />

        <TextWithHrLine text="or" />

        <form
          className="mt-6"
          onSubmit={signUpFormik.handleSubmit}
          autoComplete={"off"}
        >
          {/* email field  */}
          <div className="mb-7">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={at.src} height={22} width={22} />
              </div>
              <input
                type="email"
                className={`block w-full p-4 pl-12 text-base text-placeholder border  ${
                  errors.email && touched.email
                    ? "border-error focus:shadow-md"
                    : "border-[#EDEFF1] focus:shadow-md"
                } rounded-2xl font-medium focus:outline-transparent `}
                placeholder="Your Email"
                value={signUpFormik.values.email}
                name="email"
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                required
              />
            </div>

            {/* email error message  */}

            <div className="text-sm text-error whitespace-normal mt-2">
              {errors.email && touched.email ? <>{errors.email}</> : null}
            </div>
          </div>

          {/* name field  */}
          <div className="mb-7">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src={face.src} height={22} width={22} />
              </div>
              <input
                type="text"
                className={`block w-full p-4 pl-12 text-base text-placeholder border  ${
                  errors.name && touched.name
                    ? "border-error focus:shadow-md"
                    : "border-[#EDEFF1] focus:shadow-md"
                } rounded-2xl font-medium focus:outline-transparent `}
                placeholder="Your name"
                value={signUpFormik.values.name}
                name="name"
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                required
              />
            </div>

            {/* email error message  */}

            <div className="text-sm text-error whitespace-normal mt-2">
              {errors.name && touched.name ? <>{errors.name}</> : null}
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
                className={`block w-full p-4 pl-12 text-base text-placeholder border  ${
                  errors.password && touched.password
                    ? "border-error focus:shadow-md"
                    : "border-[#EDEFF1] focus:shadow-md"
                } rounded-2xl font-medium focus:outline-transparent `}
                placeholder="Create Password"
                value={signUpFormik.values.password}
                name="password"
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4"
              >
                <img src={eye.src} height={20} width={20} />
              </button>
            </div>

            <ul className="mt-4 flex justify-between px-4">
              {[1, 2, 3, 4, 5].map((bar) => (
                <li
                  key={bar}
                  className={`h-[5px] w-[68px] ${
                    signUpFormik.values.password.length < bar
                      ? "bg-[#F3F3F3]"
                      : "bg-[#38CB89]"
                  } rounded-full`}
                ></li>
              ))}
            </ul>
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
    </>
  );
};

export default SignUp;
