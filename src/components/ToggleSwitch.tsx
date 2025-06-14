import React, { useState } from "react";

const ToggleSwitch = () => {
  const [active, setActive] = useState("signin"); // 'signin' or 'new'

  return (
    <div className="flex items-center bg-n-8 text-white">
      <button
        className={`text-sm font-medium mr-4 transition-colors ${
          active === "new" ? "text-white" : "text-n-4"
        }`}
        onClick={() => setActive("new")}
      >
        NEW ACCOUNT
      </button>

      <div className="relative w-[110px] h-[40px] rounded-full bg-gradient-to-r from-[#10F2FF] via-[#B139FE] to-[#FFDB3D] p-1">
        <div className="flex w-full h-full items-center justify-between px-2 text-xs font-bold uppercase font-mono">
          <span
            className={`z-10 transition-colors ${
              active === "signin" ? "text-white" : "text-transparent"
            }`}
            onClick={() => setActive("signin")}
          >
            SIGN IN
          </span>
          <span
            className={`z-10 transition-colors ${
              active === "new" ? "text-white" : "text-transparent"
            }`}
            onClick={() => setActive("new")}
          >
            NEW
          </span>
        </div>

        {/* Inner pill */}
        <div
          className={`absolute top-1 left-1 w-[48%] h-[calc(100%-0.5rem)] bg-n-8 rounded-full transition-all duration-300 ${
            active === "signin" ? "translate-x-0" : "translate-x-[100%]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
