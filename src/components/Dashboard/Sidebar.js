// src/components/Sidebar.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faReceipt } from "@fortawesome/free-solid-svg-icons/faReceipt";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons/faBoxArchive";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons/faChalkboard";

const Sidebar = ({ onSelect, selectedSection }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen">
      <h1 className="text-2xl font-bold p-4">Admin Dashboard</h1>
      <ul>
        <li
          className={`p-4 hover:bg-gray-700 cursor-pointer ${
            selectedSection === "dashboard" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelect("dashboard")}
        >
          <FontAwesomeIcon className="mr-10" icon={faChalkboard} /> General
        </li>
        <li
          className={`p-4 hover:bg-gray-700 cursor-pointer ${
            selectedSection === "userManagement" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelect("userManagement")}
        >
          <FontAwesomeIcon className="mr-10" icon={faUser} /> Manage Users
        </li>
        <li
          className={`p-4 hover:bg-gray-700 cursor-pointer ${
            selectedSection === "orderManagement" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelect("orderManagement")}
        >
          <FontAwesomeIcon className="mr-12" icon={faReceipt} />
          Manage Orders
        </li>
        <li
          className={`p-4 hover:bg-gray-700 cursor-pointer ${
            selectedSection === "productManagement" ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelect("productManagement")}
        >
          <FontAwesomeIcon className="mr-10" icon={faBoxArchive} /> Manage
          Products
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
