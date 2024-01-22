import { AiTwotoneHome, AiFillThunderbolt, AiFillPhone } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { SiBookstack } from "react-icons/si";

let sections = {
  "Techs Map": {
    link: "/techs_map",
    icon: <SiBookstack />,
  },
  "Tech Numbers": {
    link: "/techs_phone",
    icon: <AiFillPhone />,
  },

  Logout: {
    link: "/",
    icon: <ImExit />,
  },
};

export default sections;
