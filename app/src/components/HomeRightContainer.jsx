import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillFileAdd } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { TbFolderQuestion } from "react-icons/tb";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TechMaps from "../screens/TechMaps";

const HomeRightContainer = ({ burger_menu_handler, burgerMenuClicked }) => {
  const navigate = useNavigate();

  const handleNavigate = (e, project_id, isProtected) => {};
  return (
    <div className="right_container_root">
      <TechMaps />
    </div>
  );
};

export default HomeRightContainer;
