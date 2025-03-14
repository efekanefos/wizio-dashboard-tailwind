import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // TailwindCSS'in bulunduğu CSS dosyası
import App from "./App";
const links = [{ href: "/sign-in", label: "Sign In" }];

function MenuList() {
  return (
    <div className="fixed bottom-3 right-3 z-20 flex flex-col gap-1 max-md:hidden">
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
