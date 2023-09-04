import React from "react";
import { MdPlace } from "react-icons/md";

function CustomMdPlaceIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Location Pin Regular with Light Blue Border */}
      <path
        d="M12 1.5C7.14929 1.5 3 5.67893 3 11.2689C3 17.1608 12 24 12 24C12 24 21 17.1608 21 11.2689C21 5.67893 16.8507 1.5 12 1.5Z"
        fill="transparent"
        stroke="#4A58B1"
        strokeWidth="1.5"
      />
      {/* Transparent Circle */}
      <circle cx="12" cy="10" r="6" fill="transparent" />
      {/* Larger Yellow Dot with PT Text */}
      <circle cx="12" cy="10" r="6" fill="yellow" />
      <text x="12" y="12" textAnchor="middle" dy=".3em" fontSize="9" fontWeight="bold" fill="#1A365D">
        PT
      </text>
    </svg>
  );
}

export default CustomMdPlaceIcon;

