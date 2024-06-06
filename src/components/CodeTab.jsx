import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCode } from "../features/Tabs";

const CodeTab = ({ code, id }) => {
  const tabsState = useSelector((state) => state.tabs);
  const dispatch = useDispatch();

  console.log(tabsState);

  return (
    <textarea
      onChange={(e) => dispatch(updateCode({ id, value: e.target.value }))}
      value={code}
      spellCheck="false"
      className="bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none"
    ></textarea>
  );
};

export default CodeTab;
