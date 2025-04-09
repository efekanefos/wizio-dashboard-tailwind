import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import EditIcon from "../../svg/EditIcon";
import CloseIcon from "../../svg/CloseIcon";
import DownArrowIcon from "../../svg/DownArrowIcon";
import teamMemberImg from "../../svg/teamMemberImg.png";

const EditTeamMemberDetails = () => {
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
        <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto h-screen">
          <div className="relative flex justify-center items-center my-5">
            <div className="rounded-full overflow-hidden">
              <img src={teamMemberImg} alt="teamMemberImg" />
            </div>
            <EditIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute top-0 -right-1"} />
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-10 w-full">
            <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" value={"Rebecca Harper"} readOnly />

            <div className="relative w-full">
              <select className="appearance-none text-black outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
                <option value="SalesRep">Sales Rep</option>
                <option value="SalesRep">Sales Rep</option>
                <option value="SalesRep">Sales Rep</option>
              </select>
              <DownArrowIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute right-4 top-3.5"} />
            </div>

            <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="email" value={"Rebecca.harper@pafilia.com"} readOnly />
            <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="tel" value={"07907579742"} readOnly />

            <div className="relative w-full">
              <select className="appearance-none text-black outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
                <option value="Projects">Project A, Project B, Project C</option>
                <option value="Projects">Project A, Project B, Project C</option>
                <option value="Projects">Project A, Project B, Project C</option>
              </select>
              <DownArrowIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 stroke-black fill-none absolute right-4 top-3.5"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTeamMemberDetails;
