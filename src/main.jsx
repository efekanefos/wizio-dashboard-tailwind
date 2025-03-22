import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const links = [
  { href: "/sign-in", label: "Sign In" },
  { href: "/create-account", label: "Create Account" },
  { href: "/forget-password", label: "Forget Password" },
  { href: "/lock-screen", label: "Lock Screen" },
  { href: "/verification", label: "Verification" },
  { href: "/create-password", label: "Create Password" },
  { href: "/name-this-project", label: "Name This Project" },
  { href: "/upload-exterior-visuals", label: "Upload Exterior Visuals" },
  { href: "/upload-interior-visuals", label: "Upload Interior Visuals" },
  { href: "/upload-social-area-visuals", label: "Upload Social Area Visuals" },
  { href: "/add-360-links", label: "Add 360 Links" },
  { href: "/add-video-link", label: "Add Video Link" },
  { href: "/upload-brochures-or-files", label: "Upload Brochures or Files" },
  { href: "/create-a-new-type", label: "Create A New Type" },
  { href: "/master-type-a", label: "Master Type A" },
  { href: "/change-project-details", label: "Change Project Details" },
  { href: "/create-a-new-group", label: "Create a New Group" },
  { href: "/change-poi", label: "Change POI" },
  { href: "/add-poi", label: "Add POI" },
  { href: "/name-this-unit", label: "Name This Unit" },
  { href: "/add-details", label: "Add Details" },
  { href: "/add-details-with-button", label: "Add Details With Button" },
  { href: "/add-details-with-properties", label: "Add Details With Properties" },
  { href: "/add-details-with-extra-buttons", label: "Add Details With Extra Buttons" },
  { href: "/add-financial-plan", label: "Add Financial Plan" },
  { href: "/name-this-block", label: "Name This Block" },
  { href: "/add-block-details", label: "Add Block Details" },
  { href: "/add-units-each-floor", label: "Add Units Each Floor" },
  { href: "/upload-block-exterior-visual", label: "Upload Block Exterior Visual" },
  { href: "/add-townhouse-details", label: "Add Townhouse Details" },
];

function MenuList() {
  return (
    <div style={{ scrollbarWidth: "none" }} className="fixed bottom-3 right-3 z-20 overflow-y-scroll max-h-screen pt-5 flex flex-col justify-start items-start gap-1 max-md:hidden">
      {links.map((link, index) => (
        <a key={index} href={link.href} className=" bg-white text-black px-4 py-2 rounded-[30px] text-[12px] hover:bg-black hover:text-white border border-black">
          {link.label}
        </a>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MenuList />
  </StrictMode>
);
