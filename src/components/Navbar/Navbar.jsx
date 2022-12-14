import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosCreate } from "react-icons/io";
import { MdLogin,MdDashboard } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
// import { TiInfo } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
import "./navbar.css";
import { getLocalData } from "../../utils/common";

const Navbar = () => {
  const [isToken, setIsToken] = React.useState(false);
  const data = getLocalData();

  useEffect(() => {
    const checkProfile = () => {
      if (data.getId !== null && data.getToken !== null) setIsToken(true);
      else setIsToken(false);
    };
    checkProfile();
  }, [data]);

  return (
    <div className="nav__container">
      <Link to="/" className="logo__container">
        <img src="/images/main_logo.png" alt="logo" className="main__logo" />
      </Link>
      <div className="navList__container">
        <ul className="main__list">
          <Link className="list__item" to="/">
            <AiFillHome className="list__item__icon" />
            <li className="list__item__text">Home</li>{" "}
          </Link>
          <Link className="list__item" to="/services/view">
            <MdDashboard className="list__item__icon" />
            <li className="list__item__text">View Blogs</li>{" "}
          </Link>
          <Link className="list__item" to="/services/create">
            <IoIosCreate className="list__item__icon" />
            <li className="list__item__text">Create</li>
          </Link>
          {/* <Link className="list__item" to="/services/about">
            <TiInfo className="list__item__icon" />
            <li className="list__item__text">About Us</li>
          </Link> */}
          {isToken === false ? (
            <Link className="list__item" to="/login">
              <MdLogin className="list__item__icon" />
              <li className="list__item__text">Login</li>
            </Link>
          ) : (
            <Link className="list__item" to="/profile/main">
              <BsPersonCircle className="list__item__icon" />
              <li className="list__item__text">Profile</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
