import React from "react";
import SideBarIcon from "../components/SideBarIcon";
import logo from "../assets/totoro.png";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { GrGallery } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { BsLightningChargeFill } from "react-icons/bs";

const SideBar = ({onSelectTab}) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col bg-secondary dark:bg-gray-800 shadow-lg border-r-2 border-green z-2">
      {/* <SideBarIcon icon={<FaFire size="28" />} place="mt-4" /> */}
      <img src={logo} alt="Logo" />
      <SideBarIcon icon={<TbSmartHome size="32" />} text="Home" tab={0} onTap={onSelectTab} />
      <SideBarIcon icon={<GrGallery size="20" />} text="Generations" tab={1} onTap={onSelectTab} />
      <Divider />
      <div className="mt-auto mb-5 flex flex-col">
        <SideBarIcon icon={<BsLightningChargeFill size="22" />} text="200 Credits" />
        <SideBarIcon icon={<CgProfile size="22" />} text="cdrescher03@gmail.com" />
      </div>
    </div>
  );
};

const Divider = () => <div className="h-20" />;

export default SideBar;
