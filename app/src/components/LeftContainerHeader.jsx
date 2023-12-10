import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSolidUser } from "react-icons/bi";

const LeftContainerHeader = ({ burgerMenuHandler }) => {
  const user_name = localStorage.getItem("name");
  return (
    <div>
      <div className="burger_menu_left_container">
        <div className="user_icon_container"></div>
        <RxHamburgerMenu size={30} onClick={burgerMenuHandler} />
      </div>
      <div className="user_info">
        <div className="user_icon">
          <BiSolidUser />
        </div>
        <p>{user_name}</p>
      </div>
    </div>
  );
};

export default LeftContainerHeader;
