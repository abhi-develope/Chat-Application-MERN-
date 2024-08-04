import React from "react";

function Toppart() {
  return (
    <div className="w-full justify-center bg-slate-600 items-center flex space-x-2 p-1  ">
      <div className="avatar online">
        <div className="w-20 rounded-full">
          <img src="../img/dp2.jpg" />
        </div>
      </div>
      <div>
          <p className="text-white ">Abhishek Prajapati</p>
          <p className="text-sm text-black ">Online</p>
        </div>
    </div>
  );
}

export default Toppart;
