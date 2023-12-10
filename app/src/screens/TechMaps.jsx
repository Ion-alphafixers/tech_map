import React, { useState } from "react";
import HomeLeftContainer from "../components/HomeLeftContainer";
import { RxHamburgerMenu } from "react-icons/rx";

const TechMaps = () => {
  const [burgerMenuClicked, setBurgerMenuClicked] = useState(false);

  const burgerMenuHandler = () => {
    console.log("State:", burgerMenuClicked);
    setBurgerMenuClicked(!burgerMenuClicked);
    console.log("State:", burgerMenuClicked);
  };

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
      }}
    >
      {burgerMenuClicked === false ? (
        <RxHamburgerMenu
          size={30}
          onClick={burgerMenuHandler}
          className="burger_menu_right_container white_bg"
        />
      ) : (
        <HomeLeftContainer
          burgerMenuHandler={burgerMenuHandler}
          burgerMenuClicked={burgerMenuClicked}
        />
      )}
      <iframe
        title="Report Section"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/view?r=eyJrIjoiNTMxYzFmZmMtOGFlMy00NTNlLWJkOWEtZDJkZTE3YTJhNDJhIiwidCI6IjdjODUwYzdjLWE3YTUtNGNhMi1iMTljLTM5MzE5MjM5ZDc2OSIsImMiOjl9"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};

export default TechMaps;
