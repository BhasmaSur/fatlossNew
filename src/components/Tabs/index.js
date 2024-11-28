import React, { useMemo, useState } from "react";
import "./tabs.css"; // External CSS file for styling

const ResponsiveTabs = ({ websiteDetails }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Day 01", content: "boxesContent", imgSrc: "nailless" },
    { title: "Day 02-06", content: "woodenPalletsContent" },
    { title: "Day 07", content: "palletCollarsContent" },
    { title: "Day 08-13", content: "cableDrumsContent" },
    { title: "Day 14", content: "customPackagingContent" },
    { title: "After Day 14", content: "customPackagingContent" },
  ];

  const imgSrc = useMemo(() => {
    switch (activeTab) {
      case 0:
        return "./images/day01.png";
      case 1:
        return "./images/day02.png";
      case 2:
        return "./images/day03.png";
      case 3:
        return "./images/day04.png";
      case 4:
        return "./images/day05.png";
      default:
        return "./images/doctor_1.png";
    }
  }, [activeTab]);

  return (
    <div className="tabs-container">
      {/* Tab Header */}
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-title ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tabs-content">
        {activeTab !== 5 && <img src={imgSrc} width={500} />}
        {activeTab === 5 && (
          <div>
            An ongoing follow-up for a period of 2 months on completion of the
            14 days program
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveTabs;
