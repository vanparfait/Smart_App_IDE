import React from "react";
import view from "../assets/view.svg";
import hide from "../assets/hide.svg";
import { useDispatch, useSelector } from "react-redux";
import { tooglePreview } from "../features/preview";

const PreviewButton = () => {
  const previewData = useSelector((state) => state.preview);

  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(tooglePreview())}
      className="py-2 px-4 rounded bg-blue-700 flex mx-auto items-center  text-slate-50"
    >
      <img
        className="w-5 mr-3"
        src={previewData.preview ? hide : view}
        alt=""
      />
      <span src={previewData.preview ? "hide" : "show"}>Preview</span>
    </button>
  );
};

export default PreviewButton;
