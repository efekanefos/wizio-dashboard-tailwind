import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import ShowPasswordIcon from "../../svg/ShowPasswordIcon";
import GoogleIcon from "../../svg/GoogleIcon";
import WindowsIcon from "../../svg/WindowsIcon";
import AppleIcon from "../../svg/AppleIcon";
import XIcon from "../../svg/XIcon";
import FacebookIcon from "../../svg/FacebookIcon";

const CreateAnAccount = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen flex justify-center items-center w-full py-5 max-2xl:px-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
      <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto">
        {/* Logo and Title */}
        <div className="mb-12">
          <ProjectLogo className={"w-16 h-12 fill-black"} />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-4xl">Hey</h3>
          <p className="text-slate-600 text-base font-normal">Create an account and start using WOS (WIZIO Operating System) </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-10 mt-5 w-full">
          <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Enter your full name" />

          <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="email" placeholder="Enter your email address" />

          <div className="w-full relative">
            <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 pr-12 rounded-full w-full leading-3" type="password" placeholder="Enter your password" />
            <ShowPasswordIcon className={"absolute top-3.5 right-5 w-5 h-5 stroke-gray-600 stroke-[1.5px] fill-none"} />
          </div>

          <div className="w-full relative">
            <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 pr-12 rounded-full w-full leading-3" type="password" placeholder="Confirm your password" />
            <ShowPasswordIcon className={"absolute top-3.5 right-5 w-5 h-5 stroke-gray-600 stroke-[1.5px] fill-none"} />
          </div>
        </div>

        <div className="flex justify-start items-center gap-3 w-full mt-10 mb-12">
          <input className="appearance-none bg-transparent w-4 h-4 border border-gray-600 rounded-full" type="radio" />
          <p className="text-gray-600">
            Accept our <span className="underline">Term and Conditions</span>
          </p>
        </div>

        <button className="text-white bg-black w-full py-1.5 rounded-full">Sign up</button>

        {/* Social Media Buttons */}

        <div className="flex justify-center items-center gap-5 my-5">
          <div className="w-12 h-12 flex justify-center items-center border border-black rounded-full">
            <GoogleIcon className={"w-6 h-6 stroke-black fill-none"} />
          </div>

          <div className="w-12 h-12 flex justify-center items-center border border-black rounded-full">
            <WindowsIcon className={"w-6 h-6 stroke-black fill-none"} />
          </div>

          <div className="w-12 h-12 flex justify-center items-center border border-black rounded-full">
            <AppleIcon className={"w-6 h-6 stroke-black fill-none"} />
          </div>

          <div className="w-12 h-12 flex justify-center items-center border border-black rounded-full">
            <XIcon className={"w-6 h-6 stroke-black fill-none"} />
          </div>

          <div className="w-12 h-12 flex justify-center items-center border border-black rounded-full">
            <FacebookIcon className={"w-6 h-6 stroke-black fill-none"} />
          </div>
        </div>

        <p className="text-gray-600">
          Do you have an account? <span className="text-black">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default CreateAnAccount;
