import React from "react";
import logo from "../../../assets/Logo.png";
import menu from "../../../assets/menu.png";

export default function NavBar() {
  return (
    <div className=" flex justify-between items-center h-[72px] px-4">
      <img src={logo} alt="logo" width={60} />

      <div className="drop-down bg-black inline-block p-2 rounded-full ">
        <img src={menu} alt="menu" width={30} />
      </div>
    </div>
  );
}
