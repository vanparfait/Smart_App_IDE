import React from "react";

const ButtonTabs = ({ id, toogleTab, buttonContent, imgURL }) => {
  return (
    <button
      onClick={() => toogleTab(id)}
      className="flex items-center px-5 py-3 hover:bg-slate-600 outline-none"
    >
      <img src={imgURL} className="w-5" alt="" />
      <span className="ml-3 text-slate-100 text-md">{buttonContent} </span>
    </button>
  );
};

export default ButtonTabs;
