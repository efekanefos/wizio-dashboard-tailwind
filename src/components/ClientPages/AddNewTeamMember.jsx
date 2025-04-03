import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import FileUploadIcon from "../../svg/FileUploadIcon";
import CloseIcon from "../../svg/CloseIcon";
import DownArrowIcon from "../../svg/DownArrowIcon";

const AddNewTeamMember = () => {
  const handleFileUpload = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <div className="bg-[#E5E7EB] h-screen">
      <div className="h-full flex flex-col justify-between items-center w-full p-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
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
        <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto h-screen">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center">Add A New Team Member</h3>

          {/* File Input */}
          <div onClick={handleFileUpload} className="w-full border-[0.5px] border-dashed border-gray-600 min-h-40 flex justify-center items-center rounded-[40px] my-5 cursor-pointer">
            <div className="text-center">
              <p className="text-gray-700">Drop files here or click to upload.</p>
              <div className="w-9 h-9 rounded-full border-[0.5px] border-gray-600 flex justify-center items-center mx-auto mt-5">
                <FileUploadIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-gray-600 fill-none"} />
              </div>
            </div>
          </div>

          {/* Gizli Dosya Input */}
          <input id="fileInput" type="file" className="hidden" />

          {/* Inputs */}
          <div className="flex flex-col gap-10 w-full">
            <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Name and surname" />

            <div className="relative w-full">
              <select className="appearance-none text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
                <option value="Position">Position</option>
                <option value="Position">Position</option>
                <option value="Position">Position</option>
              </select>
              <DownArrowIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute right-4 top-3.5"} />
            </div>

            <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="email" placeholder="email address" />
            <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="tel" placeholder="Phone number" />

            <div className="relative w-full">
              <select className="appearance-none text-gray-400 outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
                <option value="AssignProjects">Assign projects</option>
                <option value="AssignProjects">Assign projects</option>
                <option value="AssignProjects">Assign projects</option>
              </select>
              <DownArrowIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute right-4 top-3.5"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTeamMember;
