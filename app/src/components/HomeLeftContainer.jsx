import React from "react";
import LeftContainerHeader from "./LeftContainerHeader";
import LeftContainerSection from "./LeftContainerSection";
import sections from "../config/left_container_sections";

const HomeLeftContainer = ({ burgerMenuHandler }) => {
  return (
    <div className={`left_container`}>
      <LeftContainerHeader burgerMenuHandler={burgerMenuHandler} />
      <div className="sections">
        <div className="regular_sections">
          {Object.keys(sections).map((section) => {
            if (section === "Logout") {
              return <></>;
            }
            const { link, icon } = sections[section];
            return (
              <LeftContainerSection
                key={section}
                placeholder={section}
                icon={icon}
                route={link}
              />
            );
          })}
        </div>
        <div className="regular_sections">
          <LeftContainerSection
            key={"Logout"}
            placeholder={"Logout"}
            icon={sections["Logout"]["icon"]}
            route={sections["Logout"]["link"]}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLeftContainer;
