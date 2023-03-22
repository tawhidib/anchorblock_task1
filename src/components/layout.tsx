import React from "react";
import BrandLogo from "./BrandLogo";
import menu from "../assets/images/icons/menu.png";
import bell from "../assets/images/icons/bell.png";
import avatar from "../assets/images/icons/avatar.png";
import dashboard from "../assets/images/icons/dashboard.png";
import user from "../assets/images/icons/user.png";
import invoice from "../assets/images/icons/invoice.png";

interface LayoutProps {
  children: JSX.Element;
}

const pages = [
  { name: "dashboard", icon: dashboard },
  { name: "users", icon: user },
  { name: "sales", icon: invoice },
];

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="h-[100dvh] w-full relative">
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center flex-shrink min-w-[249px]">
          <button className="mr-4">
            <img src={menu.src} width={25} height={25} />
          </button>
          <BrandLogo />
        </div>
        <div className="flex-grow text-left md:block hidden">
          <form className="px-12">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative max-w-[540px]">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-placeholder dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-sm text-placeholder border  rounded-2xl border-none bg-[#F0F5FA] focus:ring-blue-500 focus:border-blue focus:shadow-md"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
        <div className="text-right flex flex-shrink">
          <button className="mr-4">
            <img src={bell.src} width={25} height={25} />
          </button>
          <button className="mr-4">
            <img src={avatar.src} width={25} height={25} />
          </button>
        </div>
      </div>

      <div className="w-[249px] h-[100dvh] bg-white absolute z-50 left-0 top-0 px-4 pt-3 border-r border-r-[#F3F3F3]">
        <BrandLogo />

        <div className="mt-10">
          <h6 className="uppercase text-placeholder text-xs font-medium">
            page
          </h6>

          {/* page links  */}

          <ul className="flex flex-col">
            {pages.map((page) => (
              <li className="my-1 p-3 rounded-xl text-[#A7AFBC] font-medium text-xs flex justify-start items-center bg-white hover:bg-[#F0F5FA] cursor-pointer capitalize">
                <span className="mr-4">
                  <img src={page.icon.src} width={16} height={16} />
                </span>
                {page.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container px-4">{children}</div>
    </div>
  );
};

export default Layout;
