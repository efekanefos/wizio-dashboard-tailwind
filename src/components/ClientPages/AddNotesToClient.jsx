import React from "react";
import ProjectLogo from "../../svg/ProjectLogo";
import CloseIcon from "../../svg/CloseIcon";
import TextAreaResizeIcon from "../../svg/TextAreaResizeIcon";

const AddNotesToClient = () => {
  return (
    <div className="bg-[#E5E7EB] h-screen">
      <div className="h-full flex flex-col justify-between items-center w-full p-12 max-xl:px-5 max-md:px-4 max-sm:px-3">
        {/* Upper Content */}
        <div className="w-full flex justify-between items-center">
          <ProjectLogo className={"w-12 h-8 fill-black"} />

          <div className="flex justify-between items-center gap-5">
            <button className="outline-none border-[0.5px] border-black rounded-full py-0.5 px-4">Save & Exit</button>

            <button className="w-7 h-7 flex justify-center items-center outline-none border-[0.5px] border-black rounded-full">
              <CloseIcon className={"w-4 h-4 stroke-black stroke-2"} />
            </button>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center w-full max-w-[632px] mx-auto h-screen">
          {/* Title */}
          <h3 className="font-bold text-4xl text-center">Add A Note</h3>

          {/* Inputs */}
          {/* kodları index.css dosyasında bulunuyor
            #ClientNote::-webkit-resizer {visibility: hidden;}
          */}
          <div className="relative w-full flex justify-center items-center">
            <textarea
              placeholder="Please write your text here"
              className="placeholder:text-gray-400 text-black border border-black bg-transparent outline-none p-5 rounded-[40px] w-[630px] h-[354px] max-w-full max-h-[80vh] sm:w-[90%] sm:h-[300px] mt-2"
              name="ClientNote"
              id="ClientNote"
            ></textarea>
            <TextAreaResizeIcon className={"w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 absolute bottom-0 right-7 max-sm:right-0 fill-black pointer-events-none"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotesToClient;
