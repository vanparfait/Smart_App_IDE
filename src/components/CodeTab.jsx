import React from "react";
import { useSelector } from "react-redux";
import { updateCode } from "../features/Tabs";

const CodeTab = ({ code, id }) => {
  const tabsState = useSelector((state) => state.tabs);

  console.log(tabsState);

  return (
    <textarea
      value={code}
      spellCheck="false"
      className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none"
    ></textarea>
  );
};

export default CodeTab;
