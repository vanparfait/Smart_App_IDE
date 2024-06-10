import React from "react";
import { useDispatch } from "react-redux";
import { hidePreview } from "../features/preview";

const ButtonTabs = ({ id, toogleTab, buttonContent, imgURL }) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        toogleTab(id);
        dispatch(hidePreview());
      }}
      className="flex items-center px-5 py-3 hover:bg-slate-600 outline-none"
    >
      <img src={imgURL} className="w-5" alt="" />
      <span className="ml-3 text-slate-100 text-md">{buttonContent} </span>
    </button>
  );
};

export default ButtonTabs;
