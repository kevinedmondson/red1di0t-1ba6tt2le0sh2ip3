import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <div className="search_bar">
        <div className="search_key"></div>
        <div className="search_icon"></div>
      </div>
      <div className="menu_group">
        <div className="topbar_menu"></div>
        <div className="topbar_menu"></div>
        <div className="topbar_menu"></div>
      </div>
    </div>
  );
};

export default Header;
