import React from "react";

function User({user}) {
  return (
    <div>
      <div className="flex space-x-4 p-4  hover:bg-slate-600 duration-300 cursor-pointer ">
        <div className="avatar online ">
          <div className="w-16 rounded-full">
            <img src="../img/dpimage.jpg" />
          </div>
        </div>
        <div>
          <p className="text-white ">{user.fullname}</p>
          <p className="text-sm">{user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
