import React from "react";
import arrow from "../../../assets/arrow.png";

export default function Hero() {
  return (
    <div className=" px-4">
      <div className=" flex items-center justify-center">
        <h1 className=" text-[48px] font-bold">
          Websites&
          <br /> Branding
        </h1>
      </div>

      <div className=" flex items-center gap-2 justify-end p-2 my-4">
        <h2>SCROLL DOWN</h2>
        <img src={arrow} width={13} />
      </div>
    </div>
  );
}
