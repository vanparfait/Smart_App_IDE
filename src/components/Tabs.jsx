import React from "react";
import CodeTab from "./CodeTab";

const Tabs = () => {
  return (
    <div className="flex grow">
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        <button>HTML</button>
        <button>JS</button>
        <button>CSS</button>
      </div>
      <div className="w-full grow relative">
        <CodeTab />
      </div>
    </div>
  );
};

export default Tabs;
