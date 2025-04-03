import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import ShowPasswordIcon from "../../svg/ShowPasswordIcon";
import lockscreenProfileImage from "../../svg/lockscreenProfileImage.png";

const LockScreen = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen flex justify-center items-center w-full py-5 max-2xl:px-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
      <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto">
        {/* Logo and Title */}
        <div className="mb-12">
          <ProjectLogo className={"w-16 h-12 fill-black"} />
        </div>
        <div className="text-center">
          <h3 className="font-bold text-4xl">Locked</h3>
          <p className="text-slate-600 text-base font-normal">Enter your password to unlock the screen</p>
        </div>
        {/* User Container */}
        <div className="flex flex-col justify-center items-center my-12">
          <div className="max-w-16 max-h-16 mb-5">
            <img className="w-full h-full" src={lockscreenProfileImage} alt="lockscreenProfileImage" />
          </div>

          <div className="text-center text-black">
            <h4 className="text-2xl font-bold mb-0.5">Richard White</h4>
            <p className="text-base font-normal">Sales Manager</p>
          </div>
        </div>
        {/* Inputs */}
        <div className="flex flex-col gap-10 mt-5 w-full mb-16">
          <div className="w-full relative">
            <input className="text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3.5 pr-12 rounded-full w-full leading-3" type="password" placeholder="Enter your password" />
            <ShowPasswordIcon className={"absolute top-3.5 right-5 w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 stroke-[1.5px] fill-none"} />
          </div>
        </div>

        <button className="text-white bg-black w-full py-1.5 rounded-full mb-5">Unlock</button>

        <p className="text-gray-600">
          Not you? Return to <span className="text-black">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default LockScreen;
