import React from 'react'

const SideBarIcon = ({ icon, text = "", selected, place = "", tab, onTap }) => {
    return (
      <div
        className={`
          group ${place} flex items-center justify-center 
          h-12 w-12 mt-2 mb-2 mx-auto  
          bg-tertiary hover:bg-grass 
          text-icon hover:bg-[#65514c]
          hover:rounded-xl rounded-3xl
          transition-all duration-300 ease-linear
          cursor-pointer shadow-lg
      `}
      onClick={() => onTap && onTap(tab)}
      >
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    );
  };

export default SideBarIcon