import React, { useState } from "react";
import "./collapse.scss";
import Switch from "../switch/Switch";

const Collapse = ({ title, text, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSwitchToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse_container">
      <button onClick={handleToggleCollapse}>{title}</button>
      <Switch checked={!isCollapsed} onChange={handleSwitchToggleCollapse} />

      <div className={`collapse-content ${isCollapsed ? "closed" : "expanded"}`}>
        <div className="collapse-title">{text}</div>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
