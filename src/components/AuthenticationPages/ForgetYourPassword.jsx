import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";

const ForgetYourPassword = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen flex justify-center items-center w-full py-5 max-2xl:px-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
      <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto">
        {/* Logo and Title */}
        <div className="mb-12">
          <ProjectLogo className={"w-16 h-12 fill-black"} />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-4xl">Forget Your Password?</h3>
          <p className="text-slate-600 text-base font-normal"> Enter your email and instruction will be send to you.</p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-10 mt-5 w-full mb-16">
          <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="email" placeholder="Enter your email address" />
        </div>

        <button className="text-white bg-black w-full py-3 rounded-full mb-5">Send Recovery Email</button>

        <p className="text-gray-600">
          Don’t have an account? <span className="text-black">Sign Up</span> or go back to
          <span className="text-black"> Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default ForgetYourPassword;
