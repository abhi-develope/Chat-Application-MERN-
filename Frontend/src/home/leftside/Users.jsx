import React from "react";
import User from "./User";

function Users() {
  return (
    <div>
      <p className="px-2 py-1 bg-slate-400 text-white mt-2">Messages</p>
      <div className="overflow-y-auto cool-scrollbar" style={{ maxHeight: "calc(78vh)" }}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
}

export default Users;
