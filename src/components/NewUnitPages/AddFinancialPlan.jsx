import React, { useState } from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import FileUploadIcon from "../../svg/FileUploadIcon";

const AddFinancialPlan = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleFileUpload = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <div className="bg-[#E5E7EB] h-screen">
      <div className="h-full flex flex-col justify-between items-center w-full p-12 max-xl:px-5 max-lg:gap-10 max-md:px-4 max-sm:px-3">
        {/* Upper Content */}
        <div className="w-full flex justify-between items-center">
          <ProjectLogo className={"w-12 h-8 fill-black"} />

          <div className="flex justify-between items-center gap-5">
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Save & Exit</button>

            <button className="w-9 h-9 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
              <CloseIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black stroke-2"} />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center">Add Financial Plan</h3>

          {/* File Input */}
          <div onClick={handleFileUpload} className="w-full border-[0.5px] border-dashed border-gray-600 min-h-40 flex justify-center items-center rounded-[40px] my-5 cursor-pointer relative">
            <div className="text-center">
              <p className="text-gray-700">Please drop your Financial table in PDF format here or click to upload.</p>
              <div className="w-9 h-9 rounded-full border-[0.5px] border-gray-600 flex justify-center items-center mx-auto mt-5">
                <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 fill-none"} />
              </div>
              <p className="text-gray-700 text-sm absolute bottom-1 left-1/2 translate-x-[-50%]">Maximum file size: 30mb.</p>
            </div>
          </div>
          {/* Gizli Dosya Input */}
          <input id="fileInput" type="file" className="hidden" />

          <div className="flex justify-between items-center w-full py-3.5">
            <p className="text-black leading-6">Save as Master Type</p>

            <label className={`relative w-10 h-3.5 rounded-full cursor-pointer transition-colors duration-300 ${isChecked ? "bg-gray-400" : "bg-gray-400"}`}>
              <input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
              <span className={`absolute w-5 h-5 top-[7px] translate-y-[-50%] left-0  rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? "translate-x-[22px] bg-black" : "translate-x-0 bg-gray-600"}`}></span>
            </label>
          </div>
        </div>

        {/* Below Content */}
        <div className="w-full flex flex-col">
          <div className="flex justify-center items-center gap-2 w-full py-3">
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
            <div className="w-full h-1 bg-black"></div>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <button className="outline-none border-[0.5px] border-black rounded-full py-1.5 px-6">Back</button>
            <button className="outline-none border-[0.5px] border-black rounded-full py-1.5 px-6">Finish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFinancialPlan;
