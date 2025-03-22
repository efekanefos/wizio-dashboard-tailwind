import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
const Verification = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen flex justify-center items-center w-full py-5 max-2xl:px-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
      <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto">
        {/* Logo and Title */}
        <div className="mb-12">
          <ProjectLogo className={"w-16 h-12 fill-black"} />
        </div>
        <h3 className="font-bold text-4xl text-center">Two Factor Verification</h3>

        {/* Inputs */}

        <div className="grid grid-cols-6 justify-between place-items-center items-center w-full max-w-[528px] gap-12 my-12 max-sm:gap-6">
          <input className="outline-none w-12 h-16 border-[0.25px] border-black py-5 px-3 text-4xl font-bold bg-transparent rounded-xl" type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} value={6} readOnly />
          <input className="outline-none w-12 h-16 border-[0.5px] border-black py-5 px-3 text-4xl font-bold bg-transparent rounded-xl" type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} value={3} readOnly />
          <input className="outline-none w-12 h-16 border-[0.5px] border-black py-5 px-3 text-4xl font-bold bg-transparent rounded-xl" type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} />
          <input className="outline-none w-12 h-16 border-[0.5px] border-black py-5 px-3 text-4xl font-bold bg-transparent rounded-xl" type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} />
          <input className="outline-none w-12 h-16 border-[0.5px] border-black py-5 px-3 text-4xl font-bold bg-transparent rounded-xl" type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} />
          <input className="outline-none w-12 h-16 border-[0.5px] border-black py-5 px-3 text-4xl font-bold bg-transparent rounded-xl" type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} />
        </div>

        <p className="text-gray-600 text-left w-full">
          Didn’t received the code? <span className="text-black">Resend</span>
        </p>

        <button className="text-white bg-black w-full py-1.5 rounded-full mt-12 mb-5">Sign in</button>

        <p className="text-red-500 text-center">Don’t share the verification code with anyone!</p>
      </div>
    </div>
  );
};

export default Verification;
