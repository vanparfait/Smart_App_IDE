import React, { useState } from "react";
import CodeTab from "./CodeTab";
import ButtonTabs from "./ButtonTabs";
import { useSelector } from "react-redux";

const Tabs = () => {
  const tabs = useSelector((state) => state.tabs);
  const [tabIndex, setTabIndex] = useState(tabs[0].id);

  return (
    <div className="flex grow">
      <div className="grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200">
        {tabs.map((tab) => (
          <ButtonTabs
            key={tab.id}
            id={tab.id}
            toogleTab={(id) => setTabIndex(id)}
            imgURL={tab.imageURL}
            buttonContent={tab.buttonContent}
          />
        ))}
      </div>
      <div className="w-full grow relative">
        <CodeTab
          id={tabIndex}
          code={tabs.find((obj) => obj.id === tabIndex).code}
        />
      </div>
    </div>
  );
};

export default Tabs;
