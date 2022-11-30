import React from "react";
import { Link } from "react-router-dom";
import "./menuItem.css";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { clearLocalData } from "../../utils/common";

const MenuItem = () => {
  // const navigate = useNavigate();

  return (
    <div className="menu__container">
      <ul className="menu__list">
        <Link className="menu__list__item" to="/profile/main">
          <TbListDetails className="menu__icon" />
          <li className="list__text">Main</li>
        </Link>
        <Link className="menu__list__item" to="/profile/dashboard">
          <MdOutlineSpaceDashboard className="menu__icon" />
          <li className="list__text">Dashboard</li>
        </Link>
        <Link className="menu__list__item" to="/profile/create_blog">
          <IoCreateOutline className="menu__icon" />
          <li className="list__text">Create Content</li>
        </Link>
        <Link className="menu__list__item" to="/profile/manage">
          <GiAutoRepair className="menu__icon" />
          <li className="list__text">Manage Contents</li>
        </Link>
        <Link
          className="menu__list__item"
          to="/login"
          onClick={() => clearLocalData()}
        >
          <MdLogout className="menu__icon" />
          <li className="list__text">Logout</li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuItem;
