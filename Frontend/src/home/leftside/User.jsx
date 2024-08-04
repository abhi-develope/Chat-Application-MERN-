import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-4 p-4  hover:bg-slate-600 duration-300 cursor-pointer ">
        <div className="avatar online ">
          <div className="w-16 rounded-full">
            <img src="../img/dpimage.jpg" />
          </div>
        </div>
        <div>
          <p className="text-white ">Abhishek Prajapati</p>
          <p className="text-sm">abhishek320@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default User;
