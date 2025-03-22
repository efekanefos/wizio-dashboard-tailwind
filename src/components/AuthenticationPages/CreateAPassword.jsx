import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import ShowPasswordIcon from "../../svg/ShowPasswordIcon";

const CreateAPassword = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen flex justify-center items-center w-full py-5 max-2xl:px-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
      <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto">
        {/* Logo and Title */}
        <div className="mb-12">
          <ProjectLogo className={"w-16 h-12 fill-black"} />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-4xl">Create A New Password</h3>
          <p className="text-slate-600 text-base font-normal">Enter your new password below</p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-10 mt-5 w-full">
          <div className="w-full relative">
            <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 pr-12 rounded-full w-full leading-3" type="password" placeholder="Enter your new password" />
            <ShowPasswordIcon className={"absolute top-3.5 right-5 w-5 h-5 stroke-gray-600 stroke-[1.5px] fill-none"} />
          </div>

          <div className="w-full relative">
            <input className="text-gray-400 placeholder-red-500 outline-none bg-transparent border border-red-500 p-5 py-3.5 pr-12 rounded-full w-full leading-3" type="password" placeholder="Confirm your new password" />
            <ShowPasswordIcon className={"absolute top-3.5 right-5 w-5 h-5 stroke-gray-600 stroke-[1.5px] fill-none"} />
            <p className="text-red-500 text-sm font-normal ml-5 mt-2">Your password doesn’t match</p>
          </div>
        </div>

        <button className="text-white bg-black w-full py-1.5 rounded-full mt-12 mb-5">Save</button>

        <p className="text-gray-600">
          Don’t have an account? <span className="text-black">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default CreateAPassword;
